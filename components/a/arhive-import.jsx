import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/z/zv2lonbaf.css';
import '../../css/z/zk9irlbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="zv2lonbaf"/><path class="zk9irlbmt"/></g>`,
		"fallback": "lets-icons:arhive-import",
	});
}

export default Component;
