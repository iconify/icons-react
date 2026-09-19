import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luws3tqha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="luws3tqha"/>`,
		"fallback": "griddy-icons:folder-search-filled",
	});
}

export default Component;
