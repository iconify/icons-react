import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp_dhhbys.css';
import '../../css/e/ewqmb9jcq.css';
import '../../css/h/hizyf0byk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp_dhhbys"/><path class="ewqmb9jcq"/><path class="hizyf0byk"/>`,
		"fallback": "energy-icons:fan-20-bold",
	});
}

export default Component;
