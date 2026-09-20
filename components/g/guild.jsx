import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kykdyy-nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kykdyy-nj"/>`,
		"fallback": "token:guild",
	});
}

export default Component;
