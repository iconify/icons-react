import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxwnwub6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxwnwub6h"/>`,
		"fallback": "ri:file-settings-line",
	});
}

export default Component;
