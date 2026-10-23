import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrsth3q7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrsth3q7r"/>`,
		"fallback": "vadivam:file-search-corner",
	});
}

export default Component;
