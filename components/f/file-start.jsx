import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbigfv4ml.css';
import '../../css/z/zdyt6ubsa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbigfv4ml"/><path class="zdyt6ubsa"/>`,
		"fallback": "vaadin:file-start",
	});
}

export default Component;
