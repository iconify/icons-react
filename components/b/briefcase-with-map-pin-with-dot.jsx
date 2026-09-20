import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn4z0js2e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn4z0js2e"/>`,
		"fallback": "pinhead:briefcase-with-map-pin-with-dot",
	});
}

export default Component;
