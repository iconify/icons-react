import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztgw17b4p.css';
import '../../css/l/laiy7fbkf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztgw17b4p"/><path class="laiy7fbkf"/>`,
		"fallback": "openmoji:chart-increasing-with-yen",
	});
}

export default Component;
