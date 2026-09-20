import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv717kbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv717kbuk"/>`,
		"fallback": "tabler:box-align-top-right",
	});
}

export default Component;
