import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akpl_7g_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="akpl_7g_s"/>`,
		"fallback": "reicon:diploma-check",
	});
}

export default Component;
