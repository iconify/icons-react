import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1r71ybup.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1r71ybup"/>`,
		"fallback": "medical-icon:i-nutrition",
	});
}

export default Component;
