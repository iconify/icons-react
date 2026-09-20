import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zyyqrx3az.css';
import '../../css/a/ap-lh0npz.css';
import '../../css/d/dl6__2aed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zyyqrx3az"/><path class="ap-lh0npz"/><path class="dl6__2aed"/></g>`,
		"fallback": "streamline-ultimate:app-window-multiple",
	});
}

export default Component;
