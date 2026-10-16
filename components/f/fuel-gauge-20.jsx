import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d03rjttsh.css';
import '../../css/x/x4s1haczx.css';
import '../../css/f/fi3lb_64h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d03rjttsh"/><path class="x4s1haczx"/><path class="fi3lb_64h"/>`,
		"fallback": "energy-icons:fuel-gauge-20",
	});
}

export default Component;
