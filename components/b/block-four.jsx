import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyoj5g2zc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyoj5g2zc"/>`,
		"fallback": "icon-park-outline:block-four",
	});
}

export default Component;
