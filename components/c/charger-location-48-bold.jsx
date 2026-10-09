import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqi8izblt.css';
import '../../css/e/emg8x4zsa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqi8izblt"/><path class="emg8x4zsa"/>`,
		"fallback": "energy-icons:charger-location-48-bold",
	});
}

export default Component;
