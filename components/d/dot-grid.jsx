import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esxp_4pyl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esxp_4pyl"/>`,
		"fallback": "at-icons:dot-grid",
	});
}

export default Component;
