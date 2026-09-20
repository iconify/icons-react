import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8eaf2bky.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s8eaf2bky"/>`,
		"fallback": "thesvg-color:github-light",
	});
}

export default Component;
