import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eageplt4r.css';
import '../../css/s/sjlcjjhzm.css';
import '../../css/s/s044fpzgh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eageplt4r"/><path class="sjlcjjhzm"/><path class="s044fpzgh"/>`,
		"fallback": "energy-icons:charger-solar-20-bold",
	});
}

export default Component;
