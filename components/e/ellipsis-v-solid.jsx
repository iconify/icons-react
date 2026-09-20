import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4f85kbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4f85kbiv"/>`,
		"fallback": "stash:ellipsis-v-solid",
	});
}

export default Component;
