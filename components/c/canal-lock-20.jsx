import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0ni6vb5b.css';
import '../../css/w/wl476na-m.css';
import '../../css/r/riruf7bad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0ni6vb5b"/><path class="wl476na-m"/><path class="riruf7bad"/>`,
		"fallback": "energy-icons:canal-lock-20",
	});
}

export default Component;
