import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-o21k_6n.css';
import '../../css/j/j3j2k6b7d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-o21k_6n"/><path class="j3j2k6b7d"/>`,
		"fallback": "temaki:cable",
	});
}

export default Component;
