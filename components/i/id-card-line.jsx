import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk-2vtw8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk-2vtw8q"/>`,
		"fallback": "ri:id-card-line",
	});
}

export default Component;
