import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdvbgl_hv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdvbgl_hv"/>`,
		"fallback": "streamline-block:basic-arrows-down",
	});
}

export default Component;
