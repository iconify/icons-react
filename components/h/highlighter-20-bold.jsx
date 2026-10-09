import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o14cv2k9c.css';
import '../../css/e/eryruythf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o14cv2k9c"/><path class="eryruythf"/>`,
		"fallback": "energy-icons:highlighter-20-bold",
	});
}

export default Component;
