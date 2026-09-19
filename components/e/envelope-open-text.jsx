import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvz32_b2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvz32_b2t"/>`,
		"fallback": "fa6-solid:envelope-open-text",
	});
}

export default Component;
