import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7wlu5qtv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7wlu5qtv"/>`,
		"fallback": "pinhead:gable-roofed-building",
	});
}

export default Component;
