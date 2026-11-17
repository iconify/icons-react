import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u46vqhknq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u46vqhknq"/>`,
		"fallback": "lucide:bot-plus",
	});
}

export default Component;
