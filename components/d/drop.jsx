import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heo0gqatv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heo0gqatv"/>`,
		"fallback": "ix:drop",
	});
}

export default Component;
