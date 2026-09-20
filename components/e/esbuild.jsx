import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_eb0xbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_eb0xbrj"/>`,
		"fallback": "material-icon-theme:esbuild",
	});
}

export default Component;
