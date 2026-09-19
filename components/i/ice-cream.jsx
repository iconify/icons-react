import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6g3u8wjy.css';
import '../../css/u/ughd8vbtx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6g3u8wjy"/><path class="ughd8vbtx"/>`,
		"fallback": "famicons:ice-cream",
	});
}

export default Component;
