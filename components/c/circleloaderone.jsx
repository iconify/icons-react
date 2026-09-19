import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eczx2wfaa.css';

const viewBox = {"width":896,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eczx2wfaa"/>`,
		"fallback": "whh:circleloaderone",
	});
}

export default Component;
