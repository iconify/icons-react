import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt3_vab_u.css';

const viewBox = {"width":472,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt3_vab_u"/>`,
		"fallback": "zmdi:alert-polygon",
	});
}

export default Component;
