import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewh_gkbzz.css';
import '../../css/g/gjv7hdb3x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewh_gkbzz"/><path class="gjv7hdb3x"/>`,
		"fallback": "energy-icons:corner-right-up-20-bold",
	});
}

export default Component;
