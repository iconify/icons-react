import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9mf81bli.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m9mf81bli"/>`,
		"fallback": "thesvg-color:github-dark",
	});
}

export default Component;
