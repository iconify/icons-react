import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2p4mcgud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2p4mcgud"/>`,
		"fallback": "iconaut:history-cog-solid",
	});
}

export default Component;
