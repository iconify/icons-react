import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2k6suboh.css';
import '../../css/w/wsn4cdbga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2k6suboh"/><path class="wsn4cdbga"/>`,
		"fallback": "energy-icons:immersion-heater-20",
	});
}

export default Component;
