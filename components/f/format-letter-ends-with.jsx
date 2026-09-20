import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5zp4067s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5zp4067s"/>`,
		"fallback": "mdi:format-letter-ends-with",
	});
}

export default Component;
