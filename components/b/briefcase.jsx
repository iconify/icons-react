import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh6t7r4um.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh6t7r4um"/>`,
		"fallback": "memory:briefcase",
	});
}

export default Component;
