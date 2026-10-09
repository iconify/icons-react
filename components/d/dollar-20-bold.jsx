import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmjswi96d.css';
import '../../css/h/hz6q229uo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmjswi96d"/><path class="hz6q229uo"/>`,
		"fallback": "energy-icons:dollar-20-bold",
	});
}

export default Component;
