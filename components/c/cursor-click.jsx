import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/s19kf6b2h.css';
import '../../css/i/ic4xmgbhb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="s19kf6b2h"/><path class="ic4xmgbhb"/></g>`,
		"fallback": "streamline-color:cursor-click",
	});
}

export default Component;
