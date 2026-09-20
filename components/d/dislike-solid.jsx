import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byrk5zf9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byrk5zf9f"/>`,
		"fallback": "mynaui:dislike-solid",
	});
}

export default Component;
