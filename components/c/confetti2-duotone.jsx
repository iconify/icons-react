import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8_2-obgx.css';
import '../../css/n/n_gojf7ke.css';
import '../../css/u/un4ldubvn.css';
import '../../css/c/caqvjbcca.css';
import '../../css/c/c2lbokb9y.css';
import '../../css/j/japywmblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8_2-obgx"/><path class="n_gojf7ke"/><path class="un4ldubvn"/><path class="caqvjbcca"/><path class="c2lbokb9y"/><path class="japywmblp"/></g>`,
		"fallback": "reicon:confetti2-duotone",
	});
}

export default Component;
