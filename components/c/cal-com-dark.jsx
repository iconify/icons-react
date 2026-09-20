import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pri68xb4e.css';
import '../../css/i/i2a0yabqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pri68xb4e"/><path class="i2a0yabqe"/>`,
		"fallback": "selfhst:cal-com-dark",
	});
}

export default Component;
