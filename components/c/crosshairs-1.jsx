import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-dcs0bkr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-dcs0bkr"/>`,
		"fallback": "glyphs:crosshairs-1",
	});
}

export default Component;
