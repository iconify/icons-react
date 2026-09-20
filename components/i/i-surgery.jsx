import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfuzbjb_t.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfuzbjb_t"/>`,
		"fallback": "medical-icon:i-surgery",
	});
}

export default Component;
