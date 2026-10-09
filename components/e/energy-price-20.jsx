import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvmh4mb4l.css';
import '../../css/s/s0fmfdclg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvmh4mb4l"/><path class="s0fmfdclg"/>`,
		"fallback": "energy-icons:energy-price-20",
	});
}

export default Component;
