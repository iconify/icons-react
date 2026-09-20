import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsi6l9whp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsi6l9whp"/>`,
		"fallback": "pinhead:aerial-cargo-lift",
	});
}

export default Component;
