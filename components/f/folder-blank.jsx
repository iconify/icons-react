import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7e3msbfy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7e3msbfy"/>`,
		"fallback": "fa7-regular:folder-blank",
	});
}

export default Component;
