import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyc5w-_2f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gyc5w-_2f"/>`,
		"fallback": "nonicons:biome-16",
	});
}

export default Component;
