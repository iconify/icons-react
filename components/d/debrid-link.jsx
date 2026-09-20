import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc3whdc8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc3whdc8f"/>`,
		"fallback": "thesvg-color:debrid-link",
	});
}

export default Component;
