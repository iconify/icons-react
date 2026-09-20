import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfkd-0bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfkd-0bbq"/>`,
		"fallback": "thesvg-color:figshare",
	});
}

export default Component;
