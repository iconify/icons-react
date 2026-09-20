import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0jug4bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0jug4bku"/>`,
		"fallback": "si:expand-more-square-line",
	});
}

export default Component;
