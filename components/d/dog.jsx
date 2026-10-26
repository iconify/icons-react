import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/cjx6dubxh.css';
import '../../css/q/q3a36wbuh.css';
import '../../css/u/uekv0cbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="cjx6dubxh"/><path class="q3a36wbuh"/><path class="uekv0cbru"/></g>`,
		"fallback": "doodle-icons:dog",
	});
}

export default Component;
