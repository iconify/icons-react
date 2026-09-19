import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcno_eowz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcno_eowz"/>`,
		"fallback": "iconoir:headset-issue",
	});
}

export default Component;
