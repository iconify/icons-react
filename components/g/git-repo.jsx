import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzrh2j4yc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzrh2j4yc"/>`,
		"fallback": "carbon:git-repo",
	});
}

export default Component;
