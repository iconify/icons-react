import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e_owei1cu.css';
import '../../css/x/x41xu3b_q.css';
import '../../css/a/azprh7bnu.css';
import '../../css/o/og95ebcrl.css';
import '../../css/h/h4ebzf3lm.css';
import '../../css/n/n04bo5b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="e_owei1cu"/><path class="x41xu3b_q"/><path class="azprh7bnu"/><path class="og95ebcrl"/><path class="h4ebzf3lm"/><path class="n04bo5b5g"/></g>`,
		"fallback": "matita:circle-dashed",
	});
}

export default Component;
