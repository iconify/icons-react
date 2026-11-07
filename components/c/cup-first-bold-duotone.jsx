import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/k1ojr1b0y.css';
import '../../css/k/k98lz0wxp.css';
import '../../css/f/f6izpdhnc.css';
import '../../css/l/lomq3hb2b.css';
import '../../css/m/mvon9_b_f.css';
import '../../css/m/miyijf3su.css';
import '../../css/q/qo8ahtbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="k1ojr1b0y"/><path class="k98lz0wxp"/></g><path class="f6izpdhnc"/><path class="lomq3hb2b"/><path class="mvon9_b_f"/><path class="miyijf3su"/><path class="qo8ahtbcu"/>`,
		"fallback": "solar:cup-first-bold-duotone",
	});
}

export default Component;
