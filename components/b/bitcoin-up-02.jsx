import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qeu_byb_m.css';
import '../../css/i/ixsc2bcry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qeu_byb_m"/><path class="ixsc2bcry"/></g>`,
		"fallback": "hugeicons:bitcoin-up-02",
	});
}

export default Component;
