import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j76-9es3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j76-9es3a"/>`,
		"fallback": "stash:image-search-light",
	});
}

export default Component;
