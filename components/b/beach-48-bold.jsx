import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_f719b8y.css';
import '../../css/z/zn32v344k.css';
import '../../css/d/d6cvwtbsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_f719b8y"/><path class="zn32v344k"/><path class="d6cvwtbsp"/>`,
		"fallback": "energy-icons:beach-48-bold",
	});
}

export default Component;
