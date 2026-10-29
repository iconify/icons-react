import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9jtn9bji.css';
import '../../css/j/j5hqbks0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9jtn9bji"/><path class="j5hqbks0s"/>`,
		"fallback": "withicons-bauhaus:circle",
	});
}

export default Component;
