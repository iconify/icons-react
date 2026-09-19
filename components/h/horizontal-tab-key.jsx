import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm0xg-a7e.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm0xg-a7e"/>`,
		"fallback": "fluent-mdl2:horizontal-tab-key",
	});
}

export default Component;
