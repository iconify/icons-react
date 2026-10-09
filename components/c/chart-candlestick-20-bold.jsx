import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvyc-pbfw.css';
import '../../css/b/bc5q17qnd.css';
import '../../css/t/tnaewda9i.css';
import '../../css/c/coha5wfoj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvyc-pbfw"/><path class="bc5q17qnd"/><path class="tnaewda9i"/><path class="coha5wfoj"/>`,
		"fallback": "energy-icons:chart-candlestick-20-bold",
	});
}

export default Component;
