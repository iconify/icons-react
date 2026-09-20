import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfvs4195e.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfvs4195e"/>`,
		"fallback": "medical-icon:i-neurology",
	});
}

export default Component;
