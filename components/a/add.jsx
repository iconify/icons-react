import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/i/i0hgwgo2s.css';
import '../../css/q/qyzpgohqr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="i0hgwgo2s"/><path class="qyzpgohqr"/>`,
		"fallback": "formkit:add",
	});
}

export default Component;
