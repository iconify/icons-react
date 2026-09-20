import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bqzynmr5r.css';
import '../../css/j/jz282xbza.css';
import '../../css/f/fqfwrtbff.css';
import '../../css/y/y_tq40zug.css';
import '../../css/j/jyqcg84cw.css';
import '../../css/a/a3m7hwbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bqzynmr5r"/><path class="jz282xbza"/><path class="fqfwrtbff"/><path class="y_tq40zug"/><path class="jyqcg84cw"/><path class="a3m7hwbga"/></g>`,
		"fallback": "solar:body-shape-linear",
	});
}

export default Component;
