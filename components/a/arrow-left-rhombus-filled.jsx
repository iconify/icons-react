import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgw_fbc9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgw_fbc9t"/>`,
		"fallback": "tabler:arrow-left-rhombus-filled",
	});
}

export default Component;
