import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb-54sz4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pb-54sz4x"/>`,
		"fallback": "griddy-icons:folder-upload",
	});
}

export default Component;
