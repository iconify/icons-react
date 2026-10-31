import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zers9_rqs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zers9_rqs"/>`,
		"fallback": "pinhead:heart-in-eaved-gabled-building",
	});
}

export default Component;
