import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rl5rxsbtj.css';
import '../../css/b/b3_n2cc4e.css';
import '../../css/b/be69_jbpr.css';
import '../../css/l/llbha6klq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rl5rxsbtj"/><path class="b3_n2cc4e"/><path class="be69_jbpr"/><path class="llbha6klq"/></g>`,
		"fallback": "streamline-cyber-color:cloud-smart-mobile-phone",
	});
}

export default Component;
