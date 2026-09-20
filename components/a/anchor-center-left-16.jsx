import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkm0taczv.css';
import '../../css/x/xm74jkbli.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkm0taczv"/><path class="xm74jkbli"/>`,
		"fallback": "qlementine-icons:anchor-center-left-16",
	});
}

export default Component;
