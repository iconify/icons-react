import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvxzyabdj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvxzyabdj"/>`,
		"fallback": "icon-park-outline:four-four",
	});
}

export default Component;
