import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyqs1j9li.css';
import '../../css/n/nogltubzb.css';
import '../../css/a/a0in21bie.css';
import '../../css/i/itvedvbjr.css';
import '../../css/v/v9ynk5b2o.css';
import '../../css/j/j_1ettbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xyqs1j9li"/><path class="nogltubzb"/><path class="a0in21bie"/><path class="itvedvbjr"/><path class="v9ynk5b2o"/><path class="j_1ettbdi"/></g>`,
		"fallback": "withicons-retro:cast",
	});
}

export default Component;
