import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie4nicb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ie4nicb2c"/>`,
		"fallback": "reicon:earbuds-charge",
	});
}

export default Component;
