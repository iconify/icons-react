import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iho8i0bnh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iho8i0bnh"/>`,
		"fallback": "fluent-mdl2:increase-indent-arrow-mirrored",
	});
}

export default Component;
