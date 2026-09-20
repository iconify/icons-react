import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz5rt2evi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz5rt2evi"/>`,
		"fallback": "thesvg-color:aurelia",
	});
}

export default Component;
