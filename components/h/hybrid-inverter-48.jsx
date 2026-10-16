import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgp2dhbyi.css';
import '../../css/e/eeyhvjk3w.css';
import '../../css/b/bzc7nkboy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgp2dhbyi"/><path class="eeyhvjk3w"/><path class="bzc7nkboy"/>`,
		"fallback": "energy-icons:hybrid-inverter-48",
	});
}

export default Component;
