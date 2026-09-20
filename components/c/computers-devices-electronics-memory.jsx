import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqwdx_ben.css';
import '../../css/y/y_fuh3bha.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqwdx_ben"/><path class="y_fuh3bha"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-memory",
	});
}

export default Component;
