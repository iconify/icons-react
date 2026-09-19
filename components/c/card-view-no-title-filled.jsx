import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxfy42b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="yxfy42b9c"/>`,
		"fallback": "boxicons:card-view-no-title-filled",
	});
}

export default Component;
