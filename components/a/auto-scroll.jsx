import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psh4icc1n.css';
import '../../css/u/uo6pjzbsg.css';
import '../../css/o/ozo3l73pu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psh4icc1n"/><path class="uo6pjzbsg"/><path class="ozo3l73pu"/>`,
		"fallback": "carbon:auto-scroll",
	});
}

export default Component;
