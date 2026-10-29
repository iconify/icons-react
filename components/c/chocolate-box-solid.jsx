import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6hmb2j6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6hmb2j6i"/>`,
		"fallback": "withicons:chocolate-box-solid",
	});
}

export default Component;
