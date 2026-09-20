import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxrkyf6ky.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/r/ra_tdac_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGaHRT4j7Q" class="lxrkyf6ky"/></defs><g class="ft5dv1b6b"><use href="#SVGaHRT4j7Q"/><use href="#SVGaHRT4j7Q" class="av3m8fbrw"/><path class="ra_tdac_m"/></g>`,
		"fallback": "tdesign:component-divider-vertical",
	});
}

export default Component;
