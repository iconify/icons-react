import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aytkx2b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aytkx2b_l"/>`,
		"fallback": "thesvg:hearthisdotat",
	});
}

export default Component;
