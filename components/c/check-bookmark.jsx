import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzx8w820q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzx8w820q"/>`,
		"fallback": "mdi:check-bookmark",
	});
}

export default Component;
