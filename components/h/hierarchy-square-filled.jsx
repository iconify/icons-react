import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yewil7zys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yewil7zys"/>`,
		"fallback": "reicon:hierarchy-square-filled",
	});
}

export default Component;
