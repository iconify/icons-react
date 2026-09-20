import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt7vg02ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt7vg02ge"/>`,
		"fallback": "ri:file-word-line",
	});
}

export default Component;
