import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzf93bbes.css';
import '../../css/f/fy34vxb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzf93bbes"/><path clip-rule="evenodd" class="fy34vxb5y"/>`,
		"fallback": "basil:copy-outline",
	});
}

export default Component;
