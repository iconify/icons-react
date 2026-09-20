import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sztuft7up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sztuft7up"/>`,
		"fallback": "streamline-ultimate:hair-dress-round-brush-1-bold",
	});
}

export default Component;
