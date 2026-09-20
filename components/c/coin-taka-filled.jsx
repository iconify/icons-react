import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdj-y3bvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdj-y3bvv"/>`,
		"fallback": "tabler:coin-taka-filled",
	});
}

export default Component;
