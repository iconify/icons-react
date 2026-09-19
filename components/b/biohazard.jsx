import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg_wpcd8m.css';

const viewBox = {"width":1024,"height":962};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg_wpcd8m"/>`,
		"fallback": "whh:biohazard",
	});
}

export default Component;
