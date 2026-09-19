import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocd8hrmmu.css';
import '../../css/q/qosfk73sa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocd8hrmmu"/><path class="qosfk73sa"/>`,
		"fallback": "cil:factory",
	});
}

export default Component;
