import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm42pmb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm42pmb9i"/>`,
		"fallback": "simple-icons:anilist",
	});
}

export default Component;
