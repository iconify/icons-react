import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgoqdb0qa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgoqdb0qa"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-webcam",
	});
}

export default Component;
