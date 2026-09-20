import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/depymg3-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="depymg3-a"/>`,
		"fallback": "reicon:closet",
	});
}

export default Component;
