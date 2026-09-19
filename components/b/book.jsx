import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skm696e6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="skm696e6r"/>`,
		"fallback": "griddy-icons:book",
	});
}

export default Component;
