import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsjdrqwxo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG1oNpLdAj" class="tsjdrqwxo"/></defs><g class="ft5dv1b6b"><use href="#SVG1oNpLdAj"/><use href="#SVG1oNpLdAj" class="p_3zmsvya"/></g>`,
		"fallback": "tdesign:grid-view",
	});
}

export default Component;
