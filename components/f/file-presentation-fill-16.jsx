import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0q8l9bjq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0q8l9bjq"/>`,
		"fallback": "garden:file-presentation-fill-16",
	});
}

export default Component;
