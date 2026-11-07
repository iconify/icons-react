import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvbcrablp.css';
import '../../css/l/lwrg85til.css';
import '../../css/v/vcu04ebhz.css';
import '../../css/i/iysev6bne.css';
import '../../css/d/dxnrye12r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvbcrablp"/><path class="lwrg85til"/><path class="vcu04ebhz"/><path class="iysev6bne"/><path class="dxnrye12r"/>`,
		"fallback": "solar:bot-bold-duotone",
	});
}

export default Component;
