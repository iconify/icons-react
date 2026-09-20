import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua73idyup.css';

const viewBox = {"width":52,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ua73idyup"/>`,
		"fallback": "thesvg-color:cisco-dark",
	});
}

export default Component;
