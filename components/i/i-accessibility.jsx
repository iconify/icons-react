import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd_v34b-g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd_v34b-g"/>`,
		"fallback": "medical-icon:i-accessibility",
	});
}

export default Component;
