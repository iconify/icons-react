import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5hmr_btj.css';
import '../../css/b/b3xl3wbbh.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/l/ly55tgbww.css';
import '../../css/j/jag__jb1w.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/btswk5pao.css';
import '../../css/l/l0bn-3b4l.css';
import '../../css/l/ll5pgsbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGBPxEY12Y" class="p5hmr_btj"/><path id="SVGyzNMrbaP" class="b3xl3wbbh"/></defs><mask id="SVGKnIaFeLM" width="5" height="9" x="5" y="6" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="ly55tgbww"/><use href="#SVGBPxEY12Y"/></mask><mask id="SVG2iJTobHm" width="5" height="6" x="14" y="11" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="jag__jb1w"/><use href="#SVGyzNMrbaP"/></mask><g class="h01tyzbfu"><path class="btswk5pao"/><use href="#SVGBPxEY12Y" mask="url(#SVGKnIaFeLM)" class="l0bn-3b4l"/><path class="ll5pgsbah"/><use href="#SVGyzNMrbaP" mask="url(#SVG2iJTobHm)" class="l0bn-3b4l"/></g>`,
		"fallback": "lets-icons:candlestick-light",
	});
}

export default Component;
