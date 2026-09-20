import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx-j32p0d.css';
import '../../css/a/ad3korw9k.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx-j32p0d"/><path class="ad3korw9k"/>`,
		"fallback": "medical-icon:i-immunizations",
	});
}

export default Component;
