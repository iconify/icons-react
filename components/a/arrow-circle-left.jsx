import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guhhauoca.css';
import '../../css/p/py4wsctwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guhhauoca"/><path class="py4wsctwu"/>`,
		"fallback": "pixel:arrow-circle-left",
	});
}

export default Component;
