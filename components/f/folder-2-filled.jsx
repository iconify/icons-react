import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3j076bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3j076bje"/>`,
		"fallback": "reicon:folder-2-filled",
	});
}

export default Component;
