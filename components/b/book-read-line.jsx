import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktn4qlgbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktn4qlgbd"/>`,
		"fallback": "ri:book-read-line",
	});
}

export default Component;
