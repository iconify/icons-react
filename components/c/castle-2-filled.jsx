import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-ybo53nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-ybo53nx"/>`,
		"fallback": "tdesign:castle-2-filled",
	});
}

export default Component;
