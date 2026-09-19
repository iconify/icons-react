import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfu9pacyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dfu9pacyg"/>`,
		"fallback": "gravity-ui:arrow-right-from-line",
	});
}

export default Component;
