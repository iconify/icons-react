import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erzf03bmv.css';
import '../../css/k/kd8y0_bxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erzf03bmv"/><path class="kd8y0_bxz"/>`,
		"fallback": "flag:gl-1x1",
	});
}

export default Component;
