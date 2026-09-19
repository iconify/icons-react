import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n57173bcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n57173bcv"/>`,
		"fallback": "griddy-icons:grid",
	});
}

export default Component;
