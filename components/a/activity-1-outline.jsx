import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a33rtejtl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a33rtejtl"/>`,
		"fallback": "glyphs:activity-1-outline",
	});
}

export default Component;
