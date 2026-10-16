import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyiqdq-1y.css';
import '../../css/e/ek3-3_91h.css';
import '../../css/f/fpc4qk6ec.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyiqdq-1y"/><path class="ek3-3_91h"/><path class="fpc4qk6ec"/>`,
		"fallback": "energy-icons:hydrogen-burner-20-bold",
	});
}

export default Component;
