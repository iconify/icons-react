import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qydvr2bqn.css';
import '../../css/a/ah2k4mbak.css';
import '../../css/g/gem3los5o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qydvr2bqn"/><path clip-rule="evenodd" class="ah2k4mbak"/><path class="gem3los5o"/></g>`,
		"fallback": "streamline-flex-color:browser-bookmark-flat",
	});
}

export default Component;
