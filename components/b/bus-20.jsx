import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4r3ojbrq.css';
import '../../css/c/ccfx0hgsj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4r3ojbrq"/><path class="ccfx0hgsj"/>`,
		"fallback": "energy-icons:bus-20",
	});
}

export default Component;
