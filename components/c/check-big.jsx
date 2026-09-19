import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktzqkeb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktzqkeb4w"/>`,
		"fallback": "ci:check-big",
	});
}

export default Component;
