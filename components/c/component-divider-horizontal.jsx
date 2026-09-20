import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9-vddblh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/e/eerv4xbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG67GspdNb" class="p9-vddblh"/></defs><g class="ft5dv1b6b"><use href="#SVG67GspdNb"/><use href="#SVG67GspdNb" class="av3m8fbrw"/><path class="eerv4xbeo"/></g>`,
		"fallback": "tdesign:component-divider-horizontal",
	});
}

export default Component;
