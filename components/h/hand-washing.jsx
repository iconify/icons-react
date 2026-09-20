import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r662-tbkw.css';
import '../../css/g/gi50c-bpp.css';
import '../../css/l/l8pfa5b4c.css';
import '../../css/f/fo42_t2xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r662-tbkw"/><path class="gi50c-bpp"/><path class="l8pfa5b4c"/><path class="fo42_t2xf"/></g>`,
		"fallback": "streamline-sharp-color:hand-washing",
	});
}

export default Component;
