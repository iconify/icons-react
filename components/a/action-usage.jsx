import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad_rmyb6z.css';
import '../../css/f/f-7sbkbnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad_rmyb6z"/><path class="f-7sbkbnc"/>`,
		"fallback": "carbon:action-usage",
	});
}

export default Component;
