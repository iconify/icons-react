import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmhsmgbgr.css';
import '../../css/l/leu4ejbkb.css';
import '../../css/m/mlc-eub6r.css';
import '../../css/w/wylesw14n.css';
import '../../css/h/huhr6qbkq.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmhsmgbgr"/><path class="leu4ejbkb"/><path class="mlc-eub6r"/><g transform="translate(320 240)scale(7.1111)" class="wylesw14n"><g id="SVGUApmAc6S"><path id="SVGQ01bDe1r" class="huhr6qbkq"/><use width="100%" height="100%" href="#SVGQ01bDe1r" transform="scale(-1 1)"/></g><use width="100%" height="100%" href="#SVGUApmAc6S" transform="rotate(72)"/><use width="100%" height="100%" href="#SVGUApmAc6S" transform="rotate(144)"/><use width="100%" height="100%" href="#SVGUApmAc6S" transform="rotate(-144)"/><use width="100%" height="100%" href="#SVGUApmAc6S" transform="rotate(-72)"/></g>`,
		"fallback": "flag:cm-4x3",
	});
}

export default Component;
