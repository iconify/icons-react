import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qst0molkh.css';
import '../../css/f/fel1l29cn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qst0molkh"/><path clip-rule="evenodd" class="fel1l29cn"/>`,
		"fallback": "qlementine-icons:call-hangup-16",
	});
}

export default Component;
