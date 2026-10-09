import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olltwdbuj.css';
import '../../css/f/flvfxybjw.css';
import '../../css/x/xw6i8dp-o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olltwdbuj"/><path class="flvfxybjw"/><path class="xw6i8dp-o"/>`,
		"fallback": "energy-icons:fireplace-20-bold",
	});
}

export default Component;
