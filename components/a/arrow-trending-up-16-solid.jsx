import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4cve9bhv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u4cve9bhv"/>`,
		"fallback": "heroicons:arrow-trending-up-16-solid",
	});
}

export default Component;
