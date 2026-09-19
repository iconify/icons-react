import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le-kwnbxs.css';
import '../../css/v/ven4ce_vs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le-kwnbxs"/><path class="ven4ce_vs"/>`,
		"fallback": "icomoon-free:eye-blocked",
	});
}

export default Component;
