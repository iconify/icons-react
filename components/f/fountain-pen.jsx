import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3zguynjx.css';
import '../../css/q/q1emg3b3n.css';
import '../../css/c/cjd27qbbp.css';
import '../../css/y/yjmi5lb6w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3zguynjx"/><path class="q1emg3b3n"/><path class="cjd27qbbp"/><path class="yjmi5lb6w"/>`,
		"fallback": "openmoji:fountain-pen",
	});
}

export default Component;
