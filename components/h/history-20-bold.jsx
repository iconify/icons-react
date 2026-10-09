import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mubd4760u.css';
import '../../css/h/hfy0htikh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mubd4760u"/><path class="hfy0htikh"/>`,
		"fallback": "energy-icons:history-20-bold",
	});
}

export default Component;
