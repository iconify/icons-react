import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwlc1fzvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwlc1fzvq"/>`,
		"fallback": "tabler:flag-bitcoin",
	});
}

export default Component;
