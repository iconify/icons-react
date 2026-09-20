import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f249w635h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f249w635h"/>`,
		"fallback": "roentgen:dog-and-cross",
	});
}

export default Component;
