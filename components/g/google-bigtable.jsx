import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw4pxhb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw4pxhb1t"/>`,
		"fallback": "thesvg:google-bigtable",
	});
}

export default Component;
