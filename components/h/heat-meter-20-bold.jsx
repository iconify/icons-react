import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujimcnb1a.css';
import '../../css/w/wuwoojhmz.css';
import '../../css/v/v4s55l-rk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujimcnb1a"/><path class="wuwoojhmz"/><path class="v4s55l-rk"/>`,
		"fallback": "energy-icons:heat-meter-20-bold",
	});
}

export default Component;
