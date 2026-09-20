import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb4udim1u.css';
import '../../css/i/i1kci5b0n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb4udim1u"/><path class="i1kci5b0n"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-mobile-qr-scan",
	});
}

export default Component;
