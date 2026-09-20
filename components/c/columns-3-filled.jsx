import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbm0q3_fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbm0q3_fl"/>`,
		"fallback": "tabler:columns-3-filled",
	});
}

export default Component;
