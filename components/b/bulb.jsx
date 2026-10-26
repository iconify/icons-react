import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/e/eiozqg0ff.css';
import '../../css/j/jhsbs6box.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="eiozqg0ff"/><path class="jhsbs6box"/></g>`,
		"fallback": "doodle-icons:bulb",
	});
}

export default Component;
