import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohrnlbcwc.css';
import '../../css/z/zxdaapb1u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohrnlbcwc"/><path class="zxdaapb1u"/>`,
		"fallback": "octicon:crosshairs-16",
	});
}

export default Component;
