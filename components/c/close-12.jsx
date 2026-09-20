import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0go82bqc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0go82bqc"/>`,
		"fallback": "qlementine-icons:close-12",
	});
}

export default Component;
