import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3-bn590g.css';
import '../../css/a/at7emfbkj.css';
import '../../css/n/nktak1bsx.css';
import '../../css/a/abfkjcbtp.css';
import '../../css/a/a2-nbnbfp.css';
import '../../css/g/gszs2_bhl.css';
import '../../css/u/ugvngly9b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3-bn590g"/><path class="at7emfbkj"/><path class="nktak1bsx"/><path class="abfkjcbtp"/><path class="a2-nbnbfp"/><path class="gszs2_bhl"/><path class="ugvngly9b"/></g>`,
		"fallback": "fluent-emoji-flat:film-projector",
	});
}

export default Component;
