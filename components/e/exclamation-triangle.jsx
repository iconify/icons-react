import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox2dgjb2m.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox2dgjb2m"/>`,
		"fallback": "fa-solid:exclamation-triangle",
	});
}

export default Component;
