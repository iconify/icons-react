import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6aq-f6ay.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6aq-f6ay"/>`,
		"fallback": "glyphs-poly:activity-1",
	});
}

export default Component;
