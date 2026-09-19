import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aceok0kpi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aceok0kpi"/>`,
		"fallback": "glyphs:h-1-duo",
	});
}

export default Component;
