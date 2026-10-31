import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1ich61cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1ich61cz"/>`,
		"fallback": "coolicons:group-fill-round",
	});
}

export default Component;
