import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qie5wsm-h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qie5wsm-h"/>`,
		"fallback": "streamline-color:heading-1-paragraph-styles-heading",
	});
}

export default Component;
