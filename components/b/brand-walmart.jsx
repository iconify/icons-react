import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmg6x7buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmg6x7buu"/>`,
		"fallback": "tabler:brand-walmart",
	});
}

export default Component;
