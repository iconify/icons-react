import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iah3itbam.css';
import '../../css/k/kbcdf4iop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iah3itbam"/><path class="kbcdf4iop"/></g>`,
		"fallback": "solar:download-minimalistic-broken",
	});
}

export default Component;
