import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op-2klb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op-2klb1m"/>`,
		"fallback": "tabler:cookie",
	});
}

export default Component;
