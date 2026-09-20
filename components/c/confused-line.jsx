import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff1o3km4s.css';
import '../../css/s/s3ykwebuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff1o3km4s"/><path class="s3ykwebuo"/>`,
		"fallback": "mingcute:confused-line",
	});
}

export default Component;
