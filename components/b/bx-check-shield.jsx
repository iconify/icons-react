import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h38or2igg.css';
import '../../css/s/sjerm91lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h38or2igg"/><path class="sjerm91lq"/>`,
		"fallback": "bx:bx-check-shield",
	});
}

export default Component;
