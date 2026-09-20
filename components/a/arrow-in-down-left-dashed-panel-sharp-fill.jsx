import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvd1w9bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvd1w9bwf"/>`,
		"fallback": "keyline-icons:arrow-in-down-left-dashed-panel-sharp-fill",
	});
}

export default Component;
