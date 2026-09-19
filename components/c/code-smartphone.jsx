import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spvfrgbsk.css';

const viewBox = {"width":344,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spvfrgbsk"/>`,
		"fallback": "zmdi:code-smartphone",
	});
}

export default Component;
