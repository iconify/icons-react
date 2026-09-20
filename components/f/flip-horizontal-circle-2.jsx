import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vddm3wbri.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vddm3wbri"/>`,
		"fallback": "streamline-flex:flip-horizontal-circle-2",
	});
}

export default Component;
