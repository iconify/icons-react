import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wili7cbww.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wili7cbww"/>`,
		"fallback": "fluent-mdl2:emoji-tab-symbols",
	});
}

export default Component;
