import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu3t0ac_w.css';
import '../../css/u/uobch0qxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu3t0ac_w"/><path class="uobch0qxj"/>`,
		"fallback": "streamline-freehand:color-spray",
	});
}

export default Component;
