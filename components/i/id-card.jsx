import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwjefd-_m.css';
import '../../css/m/mwa49fbjg.css';
import '../../css/u/uj2eeb6wg.css';
import '../../css/r/rk8d_ibcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwjefd-_m"/><path clip-rule="evenodd" class="mwa49fbjg"/><path class="uj2eeb6wg"/><path clip-rule="evenodd" class="rk8d_ibcr"/>`,
		"fallback": "lineicons:id-card",
	});
}

export default Component;
