import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn654he0f.css';
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
		"content": `<defs><path id="SVGpeEDfYMB" class="wn654he0f"/></defs><g class="ft5dv1b6b"><use href="#SVGpeEDfYMB"/><use href="#SVGpeEDfYMB" class="av3m8fbrw"/></g>`,
		"fallback": "tdesign:horizontal",
	});
}

export default Component;
