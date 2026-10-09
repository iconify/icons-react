import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-ahsnbld.css';
import '../../css/b/b8tuyrvbu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-ahsnbld"/><path class="b8tuyrvbu"/>`,
		"fallback": "energy-icons:flag-triangle-20-bold",
	});
}

export default Component;
