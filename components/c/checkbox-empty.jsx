import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llf2_5bts.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llf2_5bts"/>`,
		"fallback": "system-uicons:checkbox-empty",
	});
}

export default Component;
