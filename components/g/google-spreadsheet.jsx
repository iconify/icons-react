import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_m-qtr0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_m-qtr0q"/>`,
		"fallback": "mdi:google-spreadsheet",
	});
}

export default Component;
