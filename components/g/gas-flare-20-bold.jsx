import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id95kqb4w.css';
import '../../css/a/a8ioorcne.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id95kqb4w"/><path class="a8ioorcne"/>`,
		"fallback": "energy-icons:gas-flare-20-bold",
	});
}

export default Component;
