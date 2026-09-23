import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlm1i_1oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlm1i_1oo"/>`,
		"fallback": "keyline-icons:file-video",
	});
}

export default Component;
