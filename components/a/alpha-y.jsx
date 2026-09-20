import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db9x-x-wx.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db9x-x-wx"/>`,
		"fallback": "memory:alpha-y",
	});
}

export default Component;
