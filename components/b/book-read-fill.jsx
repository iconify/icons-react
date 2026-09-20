import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhmydfb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhmydfb5d"/>`,
		"fallback": "ri:book-read-fill",
	});
}

export default Component;
