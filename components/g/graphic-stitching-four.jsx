import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecjcxcbix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecjcxcbix"/>`,
		"fallback": "icon-park-outline:graphic-stitching-four",
	});
}

export default Component;
