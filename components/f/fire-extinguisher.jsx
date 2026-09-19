import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg6bv3b-l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg6bv3b-l"/>`,
		"fallback": "fa-solid:fire-extinguisher",
	});
}

export default Component;
