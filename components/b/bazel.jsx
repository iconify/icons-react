import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1sze7i_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1sze7i_h"/>`,
		"fallback": "file-icons:bazel",
	});
}

export default Component;
