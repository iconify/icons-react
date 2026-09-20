import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whte9obio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whte9obio"/>`,
		"fallback": "tdesign:folder-add-1-filled",
	});
}

export default Component;
