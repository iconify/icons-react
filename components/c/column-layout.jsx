import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhj8dzb9x.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGmXkTueIg" class="dhj8dzb9x"/></defs><g class="ft5dv1b6b"><use href="#SVGmXkTueIg"/><use href="#SVGmXkTueIg" class="av3m8fbrw"/></g>`,
		"fallback": "tdesign:column-layout",
	});
}

export default Component;
