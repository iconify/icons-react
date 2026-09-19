import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyfafeb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyfafeb7v"/>`,
		"fallback": "heroicons:arrow-long-left",
	});
}

export default Component;
