import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aizf3somi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aizf3somi"/>`,
		"fallback": "mdi:film-minus",
	});
}

export default Component;
