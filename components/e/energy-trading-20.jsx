import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu-l-lbvx.css';
import '../../css/g/g0t4uwbww.css';
import '../../css/c/c7ecv3bfa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu-l-lbvx"/><path class="g0t4uwbww"/><path class="c7ecv3bfa"/>`,
		"fallback": "energy-icons:energy-trading-20",
	});
}

export default Component;
