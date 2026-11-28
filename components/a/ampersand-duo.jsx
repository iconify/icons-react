import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifj42nz6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifj42nz6m"/>`,
		"fallback": "iconaut:ampersand-duo",
	});
}

export default Component;
