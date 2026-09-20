import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5ho_kb9h.css';
import '../../css/l/l6k3nwb1m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5ho_kb9h"/><path class="l6k3nwb1m"/>`,
		"fallback": "streamline-pixel:design-half-circle-ruler",
	});
}

export default Component;
