import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u46ksmjsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u46ksmjsq"/>`,
		"fallback": "ri:health-book-fill",
	});
}

export default Component;
