import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/o/ob40veb0y.css';
import '../../css/h/hjre30brw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ob40veb0y"/><path class="hjre30brw"/></g>`,
		"fallback": "doodle-icons:gift-bag",
	});
}

export default Component;
