import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3b4blbrq.css';
import '../../css/b/bo9dr7buy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3b4blbrq"/><path class="bo9dr7buy"/>`,
		"fallback": "bx:bxs-flag-checkered",
	});
}

export default Component;
