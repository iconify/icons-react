import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztm_71buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztm_71buu"/>`,
		"fallback": "ri:file-copy-2-fill",
	});
}

export default Component;
