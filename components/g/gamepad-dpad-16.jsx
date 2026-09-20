import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_k1aixrm.css';
import '../../css/q/qrzlcfwkx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_k1aixrm"/><path clip-rule="evenodd" class="qrzlcfwkx"/>`,
		"fallback": "qlementine-icons:gamepad-dpad-16",
	});
}

export default Component;
