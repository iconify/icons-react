import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uaf-dkble.css';
import '../../css/z/zk0ke1b2b.css';
import '../../css/j/jjxkvab0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uaf-dkble"/><path class="zk0ke1b2b"/><path class="jjxkvab0q"/></g>`,
		"fallback": "streamline-sharp:deepfake-technology-2",
	});
}

export default Component;
