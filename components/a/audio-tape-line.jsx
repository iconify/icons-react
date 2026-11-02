import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uefbi9byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uefbi9byy"/>`,
		"fallback": "mingcute:audio-tape-line",
	});
}

export default Component;
