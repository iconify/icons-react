import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8gjc9qvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8gjc9qvl"/>`,
		"fallback": "heroicons:battery-100",
	});
}

export default Component;
