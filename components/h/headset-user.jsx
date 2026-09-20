import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/i/is016qbow.css';
import '../../css/j/j21j-5bvh.css';
import '../../css/f/fu_lrcb_y.css';
import '../../css/j/j79rc7b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="is016qbow"/><path class="j21j-5bvh"/><path class="fu_lrcb_y"/><path class="j79rc7b_y"/></g>`,
		"fallback": "streamline-cyber:headset-user",
	});
}

export default Component;
