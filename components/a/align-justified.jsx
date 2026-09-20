import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq2gpnvwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq2gpnvwl"/>`,
		"fallback": "tabler:align-justified",
	});
}

export default Component;
