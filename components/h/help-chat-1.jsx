import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/j13phnf0t.css';
import '../../css/d/dyuy5na4d.css';
import '../../css/b/bgj_1ypuk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="j13phnf0t"/><path class="dyuy5na4d"/><path class="bgj_1ypuk"/></g>`,
		"fallback": "streamline-plump:help-chat-1",
	});
}

export default Component;
