import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x71d89oyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x71d89oyr"/>`,
		"fallback": "thesvg-color:google-search-console-legacy",
	});
}

export default Component;
