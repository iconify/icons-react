import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hkpeo1bug.css';
import '../../css/t/tb5ln68hg.css';
import '../../css/v/vx2joeb3w.css';
import '../../css/i/ihko77b1j.css';
import '../../css/s/so4ivh5-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hkpeo1bug"/><path class="tb5ln68hg"/><path class="vx2joeb3w"/><path class="ihko77b1j"/><path class="so4ivh5-c"/></g>`,
		"fallback": "reicon:icon3",
	});
}

export default Component;
