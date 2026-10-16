import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itjermisk.css';
import '../../css/x/xu0oo2s1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itjermisk"/><path class="xu0oo2s1z"/>`,
		"fallback": "energy-icons:gas-compressor-20-bold",
	});
}

export default Component;
