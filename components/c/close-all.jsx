import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvv_m2blq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvv_m2blq"/>`,
		"fallback": "codicon:close-all",
	});
}

export default Component;
