import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_1x7ub7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_1x7ub7a"/>`,
		"fallback": "qlementine-icons:discord-fill-16",
	});
}

export default Component;
