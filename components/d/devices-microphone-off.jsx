import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvk4_jk4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvk4_jk4d"/>`,
		"fallback": "streamline-block:devices-microphone-off",
	});
}

export default Component;
