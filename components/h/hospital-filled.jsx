import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmd_ombao.css';
import '../../css/e/ejoji3b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmd_ombao"/><path class="ejoji3b3r"/>`,
		"fallback": "tdesign:hospital-filled",
	});
}

export default Component;
