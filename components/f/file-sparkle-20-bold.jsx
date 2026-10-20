import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iccsyvk3j.css';
import '../../css/i/ipywdhbyk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iccsyvk3j"/><path class="ipywdhbyk"/>`,
		"fallback": "energy-icons:file-sparkle-20-bold",
	});
}

export default Component;
