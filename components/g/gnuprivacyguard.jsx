import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf_5uubqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf_5uubqr"/>`,
		"fallback": "simple-icons:gnuprivacyguard",
	});
}

export default Component;
