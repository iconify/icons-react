import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/s/s_1kjkbfy.css';
import '../../css/s/sjszqzyyg.css';
import '../../css/l/lgu-qkbjy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="s_1kjkbfy"/><path class="sjszqzyyg"/><path class="lgu-qkbjy"/></g>`,
		"fallback": "streamline-plump:inbox-content",
	});
}

export default Component;
