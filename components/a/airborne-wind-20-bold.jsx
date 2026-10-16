import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4z_7vrmz.css';
import '../../css/t/t_ln7kttq.css';
import '../../css/o/owb9_xn9q.css';
import '../../css/h/hpjl1xeux.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4z_7vrmz"/><path class="t_ln7kttq"/><path class="owb9_xn9q"/><path class="hpjl1xeux"/>`,
		"fallback": "energy-icons:airborne-wind-20-bold",
	});
}

export default Component;
