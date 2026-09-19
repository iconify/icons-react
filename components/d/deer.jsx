import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/rdygc_b8p.css';
import '../../css/w/wr1lcksbm.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1vmh99zp.css';
import '../../css/o/ohywbpblm.css';
import '../../css/m/mye2eqmdo.css';
import '../../css/p/phpu9wb1p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGP7lZ8cCf" class="n1mjunbsu"><path class="rdygc_b8p"/><path class="wr1lcksbm"/></mask><g class="ft5dv1b6b"><path class="a1vmh99zp"/><path class="ohywbpblm"/><path mask="url(#SVGP7lZ8cCf)" class="mye2eqmdo"/><path mask="url(#SVGP7lZ8cCf)" class="phpu9wb1p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:deer",
	});
}

export default Component;
