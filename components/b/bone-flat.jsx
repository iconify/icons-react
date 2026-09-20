import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rab22r5bc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rab22r5bc"/>`,
		"fallback": "streamline-color:bone-flat",
	});
}

export default Component;
