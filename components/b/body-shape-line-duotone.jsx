import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bqzynmr5r.css';
import '../../css/j/jz282xbza.css';
import '../../css/x/xlopdqbbn.css';
import '../../css/z/zq7xhfv4t.css';
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
		"content": `<g class="ipq1z-bjh"><path class="bqzynmr5r"/><path class="jz282xbza"/><path class="xlopdqbbn"/><path class="zq7xhfv4t"/><path class="jyqcg84cw"/><path class="a3m7hwbga"/></g>`,
		"fallback": "solar:body-shape-line-duotone",
	});
}

export default Component;
