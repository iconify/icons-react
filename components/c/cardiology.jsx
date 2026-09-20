import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uclis5b0x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uclis5b0x"/>`,
		"fallback": "medical-icon:cardiology",
	});
}

export default Component;
