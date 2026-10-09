import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4h0zsw5y.css';
import '../../css/w/wuq77txzp.css';
import '../../css/j/j-rokuiwf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4h0zsw5y"/><path class="wuq77txzp"/><path class="j-rokuiwf"/>`,
		"fallback": "energy-icons:goal-20",
	});
}

export default Component;
