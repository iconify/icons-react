import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km2fl-ght.css';
import '../../css/h/hu39vd16s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km2fl-ght"/><path class="hu39vd16s"/>`,
		"fallback": "energy-icons:chart-step-20",
	});
}

export default Component;
