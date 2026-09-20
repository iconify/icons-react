import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgdm3ebfe.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgdm3ebfe"/>`,
		"fallback": "lineicons:arrow-all-direction",
	});
}

export default Component;
