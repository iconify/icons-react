import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtmerfb1q.css';
import '../../css/f/fig7n4w6p.css';
import '../../css/u/utvn67bmq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtmerfb1q"/><path class="fig7n4w6p"/><path class="utvn67bmq"/>`,
		"fallback": "catppuccin:folder-assets-open",
	});
}

export default Component;
