import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3o1dcc0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3o1dcc0t"/>`,
		"fallback": "thesvg-color:datacamp",
	});
}

export default Component;
