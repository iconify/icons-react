import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mumuo9s8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mumuo9s8g"/>`,
		"fallback": "withicons:folder-search-gloss",
	});
}

export default Component;
