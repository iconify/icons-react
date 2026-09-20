import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hor2v3luj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hor2v3luj"/>`,
		"fallback": "ri:git-repository-private-fill",
	});
}

export default Component;
