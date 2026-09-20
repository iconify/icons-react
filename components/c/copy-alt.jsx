import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlrm6yb-l.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gkm79o2wn.css';
import '../../css/f/f_qydnbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGKJaeveDz" class="qlrm6yb-l"/></defs><mask id="SVGYA3t2btq" class="n1mjunbsu"><use href="#SVGKJaeveDz"/></mask><g class="h01tyzbfu"><path class="gkm79o2wn"/><use href="#SVGKJaeveDz" mask="url(#SVGYA3t2btq)" class="f_qydnbny"/></g>`,
		"fallback": "lets-icons:copy-alt",
	});
}

export default Component;
