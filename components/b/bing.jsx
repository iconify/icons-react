import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyp0zek2m.css';
import '../../css/e/eicf32biw.css';
import '../../css/h/hjuyob91s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jyp0zek2m"/><path class="eicf32biw"/><path class="hjuyob91s"/>`,
		"fallback": "lineicons:bing",
	});
}

export default Component;
