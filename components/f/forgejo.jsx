import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkwfr08ug.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkwfr08ug"/>`,
		"fallback": "fa7-brands:forgejo",
	});
}

export default Component;
