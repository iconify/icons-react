import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhqsqi7qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhqsqi7qs"/>`,
		"fallback": "coolicons:equal-bulk-round",
	});
}

export default Component;
