import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxea_3b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qxea_3b-u"/>`,
		"fallback": "stash:emoji-laugh-solid",
	});
}

export default Component;
