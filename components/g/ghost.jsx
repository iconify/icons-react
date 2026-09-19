import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ik3w5piwl.css';
import '../../css/z/z77-8wsfv.css';
import '../../css/v/vjknskzjt.css';
import '../../css/c/c2fdelwhz.css';
import '../../css/l/l-lx1h0ik.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ik3w5piwl"/><path class="z77-8wsfv"/><path class="vjknskzjt"/><path class="c2fdelwhz"/><path class="l-lx1h0ik"/></g>`,
		"fallback": "fluent-emoji-flat:ghost",
	});
}

export default Component;
