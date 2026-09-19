import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7381obji.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7381obji"/>`,
		"fallback": "zmdi:collection-image",
	});
}

export default Component;
