import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eglqej6yx.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/a/a8e9apjvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG50KS6Lfb" class="eglqej6yx"/></defs><g class="ft5dv1b6b"><use href="#SVG50KS6Lfb"/><use href="#SVG50KS6Lfb" class="av3m8fbrw"/><path class="a8e9apjvn"/></g>`,
		"fallback": "tdesign:ai-tool",
	});
}

export default Component;
