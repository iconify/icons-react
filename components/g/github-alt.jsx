import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsqb0y01i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsqb0y01i"/>`,
		"fallback": "fe:github-alt",
	});
}

export default Component;
