import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3f8adbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3f8adbcv"/>`,
		"fallback": "tabler:hexagon-letter-u-filled",
	});
}

export default Component;
