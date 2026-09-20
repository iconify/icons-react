import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jegz6cbzd.css';
import '../../css/i/icmtrjuub.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jegz6cbzd"/><path class="icmtrjuub"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-monitor",
	});
}

export default Component;
