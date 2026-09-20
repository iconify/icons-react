import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmxhs-b4r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmxhs-b4r"/>`,
		"fallback": "streamline:computer-virtual-reality-gaming-virtual-gear-controller-reality-games-headset-technology-vr-eyewear",
	});
}

export default Component;
