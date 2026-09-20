import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2bylrb9j.css';
import '../../css/i/ijc0stb4c.css';
import '../../css/x/x3n8gwoar.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2bylrb9j"/><path class="ijc0stb4c"/><path class="x3n8gwoar"/>`,
		"fallback": "vaadin:diploma",
	});
}

export default Component;
