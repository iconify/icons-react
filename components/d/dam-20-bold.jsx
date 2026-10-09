import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2x88vmhw.css';
import '../../css/p/pv9k0lrqk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2x88vmhw"/><path class="pv9k0lrqk"/>`,
		"fallback": "energy-icons:dam-20-bold",
	});
}

export default Component;
