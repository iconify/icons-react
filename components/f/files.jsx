import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/atdeesb2k.css';
import '../../css/l/lpbxz5bsk.css';
import '../../css/s/sizmydbvw.css';
import '../../css/p/p_g5enbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="atdeesb2k wm-shadow"/><path class="lpbxz5bsk wm-shadow"/><path class="sizmydbvw"/><path class="p_g5enbde"/></g>`,
		"fallback": "withicons-brutal:files",
	});
}

export default Component;
