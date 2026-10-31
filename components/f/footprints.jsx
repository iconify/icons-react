import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/txf3d7t6n.css';
import '../../css/v/v5rcw3brp.css';
import '../../css/e/en7ok6bgz.css';
import '../../css/u/ukzh41bzd.css';
import '../../css/q/q-nrvp36w.css';
import '../../css/y/y18qn6b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="txf3d7t6n wm-shadow"/><path class="v5rcw3brp"/><path class="en7ok6bgz"/><path class="ukzh41bzd"/><path class="q-nrvp36w"/><path class="y18qn6b2z"/></g>`,
		"fallback": "withicons-retro:footprints",
	});
}

export default Component;
