import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkc0vy_ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkc0vy_ze"/>`,
		"fallback": "ci:image-01",
	});
}

export default Component;
