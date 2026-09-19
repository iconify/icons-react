import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us8x8xi4f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="us8x8xi4f"/>`,
		"fallback": "heroicons:cog-6-tooth-16-solid",
	});
}

export default Component;
