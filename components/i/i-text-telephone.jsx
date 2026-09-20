import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwy0kfu6l.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwy0kfu6l"/>`,
		"fallback": "medical-icon:i-text-telephone",
	});
}

export default Component;
