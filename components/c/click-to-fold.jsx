import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh40-cbre.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh40-cbre"/>`,
		"fallback": "icon-park-outline:click-to-fold",
	});
}

export default Component;
