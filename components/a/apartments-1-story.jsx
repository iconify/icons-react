import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acvxodb4s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acvxodb4s"/>`,
		"fallback": "roentgen:apartments-1-story",
	});
}

export default Component;
