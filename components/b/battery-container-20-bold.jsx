import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6dgzbb5r.css';
import '../../css/j/jd4w5xjrx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6dgzbb5r"/><path class="jd4w5xjrx"/>`,
		"fallback": "energy-icons:battery-container-20-bold",
	});
}

export default Component;
