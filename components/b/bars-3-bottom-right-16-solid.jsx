import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztf73cbph.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ztf73cbph"/>`,
		"fallback": "heroicons:bars-3-bottom-right-16-solid",
	});
}

export default Component;
