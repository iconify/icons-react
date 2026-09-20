import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e3bc_0b_p.css';
import '../../css/s/s_5om4bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e3bc_0b_p"/><path class="s_5om4bkv"/></g>`,
		"fallback": "reicon:gas-station3",
	});
}

export default Component;
