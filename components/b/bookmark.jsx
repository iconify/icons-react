import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hueh19bjn.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hueh19bjn"/>`,
		"fallback": "fa-regular:bookmark",
	});
}

export default Component;
