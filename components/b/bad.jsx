import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zko268h_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zko268h_l"/>`,
		"fallback": "icon-park-outline:bad",
	});
}

export default Component;
