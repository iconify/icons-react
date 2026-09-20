import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qh6lv5zbp.css';
import '../../css/j/jmevjtf7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qh6lv5zbp"/><path class="jmevjtf7f"/></g>`,
		"fallback": "streamline-plump:beer-pitch",
	});
}

export default Component;
