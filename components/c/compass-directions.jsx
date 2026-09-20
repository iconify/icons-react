import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/u/uxoi3ubxk.css';
import '../../css/k/k30m85blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="uxoi3ubxk"/><path class="k30m85blc"/></g>`,
		"fallback": "streamline-ultimate:compass-directions",
	});
}

export default Component;
