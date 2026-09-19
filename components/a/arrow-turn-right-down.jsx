import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve86289fk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve86289fk"/>`,
		"fallback": "at-icons:arrow-turn-right-down",
	});
}

export default Component;
