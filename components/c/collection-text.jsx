import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmf28pbqx.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmf28pbqx"/>`,
		"fallback": "zmdi:collection-text",
	});
}

export default Component;
