import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v819m1itl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v819m1itl"/>`,
		"fallback": "solar:folder-git-bold",
	});
}

export default Component;
