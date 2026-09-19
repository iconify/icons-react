import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp8vudhak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp8vudhak"/>`,
		"fallback": "icon-park-outline:error-prompt",
	});
}

export default Component;
