import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6dd8jb9u.css';
import '../../css/w/w4coxzjvw.css';
import '../../css/u/u3n9vcbth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6dd8jb9u"/><path class="w4coxzjvw"/><path class="u3n9vcbth"/>`,
		"fallback": "energy-icons:cassette-20-bold",
	});
}

export default Component;
