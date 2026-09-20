import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0_rvbb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0_rvbb_e"/>`,
		"fallback": "streamline-ultimate:file-code-bold",
	});
}

export default Component;
