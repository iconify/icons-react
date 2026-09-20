import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd5f-k6hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd5f-k6hw"/>`,
		"fallback": "thesvg:anytype",
	});
}

export default Component;
