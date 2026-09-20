import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5ltknbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5ltknbci"/>`,
		"fallback": "tabler:filter-2-search",
	});
}

export default Component;
