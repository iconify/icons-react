import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9qkdc_cf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9qkdc_cf"/>`,
		"fallback": "lsicon:amount-down-filled",
	});
}

export default Component;
