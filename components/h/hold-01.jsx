import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq8h0v79p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq8h0v79p"/>`,
		"fallback": "hugeicons:hold-01",
	});
}

export default Component;
