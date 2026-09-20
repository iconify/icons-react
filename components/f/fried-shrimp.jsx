import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwt_mwbit.css';
import '../../css/z/z7xvm0bee.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b7jaab_wx.css';
import '../../css/z/z0dzo430t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwt_mwbit"/><path class="z7xvm0bee"/><g class="ij2x_72vy"><path class="b7jaab_wx"/><path class="z0dzo430t"/></g>`,
		"fallback": "openmoji:fried-shrimp",
	});
}

export default Component;
