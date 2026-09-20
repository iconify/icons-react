import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmqtjobnx.css';
import '../../css/n/nm-0yofzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmqtjobnx"/><path class="nm-0yofzq"/>`,
		"fallback": "tdesign:building-1-filled",
	});
}

export default Component;
