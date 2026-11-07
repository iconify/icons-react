import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_en--b-n.css';
import '../../css/w/wru8zmbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_en--b-n"/><path clip-rule="evenodd" class="wru8zmbec"/>`,
		"fallback": "solar:home-smile-angle-outline",
	});
}

export default Component;
