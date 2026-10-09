import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v454e9bix.css';
import '../../css/j/jjdvkvbzo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v454e9bix"/><path class="jjdvkvbzo"/>`,
		"fallback": "energy-icons:git-commit-20",
	});
}

export default Component;
