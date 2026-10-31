import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xak2wjf8q.css';
import '../../css/e/ecb4v2bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xak2wjf8q"/><path class="ecb4v2bgs"/></g>`,
		"fallback": "coolicons:house-alt-2-duotone-round",
	});
}

export default Component;
