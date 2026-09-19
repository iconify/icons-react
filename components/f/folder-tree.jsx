import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3jpuqbza.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3jpuqbza"/>`,
		"fallback": "fa7-solid:folder-tree",
	});
}

export default Component;
