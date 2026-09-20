import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c309e1k6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c309e1k6f"/>`,
		"fallback": "lineicons:hand-taking-user",
	});
}

export default Component;
