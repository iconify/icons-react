import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfuo7qn9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfuo7qn9f"/>`,
		"fallback": "thesvg-color:etihad-airways",
	});
}

export default Component;
