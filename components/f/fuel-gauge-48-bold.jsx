import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw9esif9u.css';
import '../../css/i/ikm4i4bwb.css';
import '../../css/s/s0mrvwbux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw9esif9u"/><path class="ikm4i4bwb"/><path class="s0mrvwbux"/>`,
		"fallback": "energy-icons:fuel-gauge-48-bold",
	});
}

export default Component;
