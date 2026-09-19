import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo4gv16sf.css';
import '../../css/k/k3099qatj.css';
import '../../css/t/tx1eg0b5a.css';
import '../../css/z/z8-ie2blf.css';
import '../../css/i/iad76iwuh.css';
import '../../css/m/m78smcc_q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qo4gv16sf"/><path clip-rule="evenodd" class="k3099qatj"/><path class="tx1eg0b5a"/><rect transform="rotate(-15 13.552 45.256)" class="z8-ie2blf"/><rect transform="rotate(165 22.797 21.019)scale(1 -1)" class="iad76iwuh"/><path class="m78smcc_q"/></g>`,
		"fallback": "glyphs-poly:car-crash",
	});
}

export default Component;
