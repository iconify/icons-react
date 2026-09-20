import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bto42ybcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bto42ybcr"/>`,
		"fallback": "keyline-icons:arrow-up-left-dashed-panel-sharp",
	});
}

export default Component;
