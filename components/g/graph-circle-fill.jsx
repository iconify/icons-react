import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtr9hcbcf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtr9hcbcf"/>`,
		"fallback": "f7:graph-circle-fill",
	});
}

export default Component;
