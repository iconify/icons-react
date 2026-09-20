import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsomq0bpp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vsomq0bpp"/>`,
		"fallback": "teenyicons:forward-circle-solid",
	});
}

export default Component;
