import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/r/rvxiovkwu.css';
import '../../css/u/unvpovb4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="rvxiovkwu"/><path class="unvpovb4h"/></g>`,
		"fallback": "streamline-plump:chat-bubble-oval-smiley-1",
	});
}

export default Component;
