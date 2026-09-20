import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g50cx0bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g50cx0bap"/>`,
		"fallback": "uil:folder-upload",
	});
}

export default Component;
