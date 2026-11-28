import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yni2ox9wx.css';
import '../../css/r/rr69ofbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yni2ox9wx"/><path class="primary rr69ofbzf"/>`,
		"fallback": "iconaut:fast-forward-duo",
	});
}

export default Component;
