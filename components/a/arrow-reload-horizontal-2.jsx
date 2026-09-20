import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/e/el6yxyw-a.css';
import '../../css/w/wh8537bck.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="el6yxyw-a"/><path class="wh8537bck"/></g>`,
		"fallback": "streamline-color:arrow-reload-horizontal-2",
	});
}

export default Component;
