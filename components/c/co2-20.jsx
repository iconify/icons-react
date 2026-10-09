import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpfbl0bmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpfbl0bmi"/>`,
		"fallback": "energy-icons:co2-20",
	});
}

export default Component;
