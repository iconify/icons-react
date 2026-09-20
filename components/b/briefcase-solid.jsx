import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdfevou9k.css';
import '../../css/h/hfrzhebxm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdfevou9k"/><path class="hfrzhebxm"/>`,
		"fallback": "teenyicons:briefcase-solid",
	});
}

export default Component;
