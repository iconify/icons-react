import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6wz8cb3t.css';
import '../../css/o/owu91ypwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t6wz8cb3t"/><path class="owu91ypwk"/>`,
		"fallback": "eva:eye-off-fill",
	});
}

export default Component;
