import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i64wucb0q.css';
import '../../css/q/qryw2o0qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i64wucb0q"/><path class="qryw2o0qn"/>`,
		"fallback": "bxs:crop",
	});
}

export default Component;
