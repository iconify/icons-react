import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vij84ybpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vij84ybpg"/>`,
		"fallback": "iconamoon:attachment-thin",
	});
}

export default Component;
