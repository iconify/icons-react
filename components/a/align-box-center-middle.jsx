import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u93049byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u93049byl"/>`,
		"fallback": "tabler:align-box-center-middle",
	});
}

export default Component;
