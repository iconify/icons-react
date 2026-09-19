import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul6d8o8hz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul6d8o8hz"/>`,
		"fallback": "icon-park-outline:bytedance",
	});
}

export default Component;
