import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/s2yn8m4oe.css';
import '../../css/q/qe0cn2bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="s2yn8m4oe"/><path class="qe0cn2bte"/></g>`,
		"fallback": "streamline-logos:diigo-logo-3",
	});
}

export default Component;
