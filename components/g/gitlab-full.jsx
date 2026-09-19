import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp2m2nhck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xp2m2nhck"/>`,
		"fallback": "iconoir:gitlab-full",
	});
}

export default Component;
