import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjqw8srsv.css';
import '../../css/c/cygyayzlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wjqw8srsv"/><path class="cygyayzlj"/></g>`,
		"fallback": "reicon:backward3-filled",
	});
}

export default Component;
