import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5vp10bfi.css';
import '../../css/k/k1vbm5bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer v5vp10bfi"/><path class="duoicon-primary-layer k1vbm5bqx"/>`,
		"fallback": "duo-icons:calendar",
	});
}

export default Component;
