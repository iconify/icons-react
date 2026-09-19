import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eour_gbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eour_gbjn"/>`,
		"fallback": "bxs:archive-in",
	});
}

export default Component;
