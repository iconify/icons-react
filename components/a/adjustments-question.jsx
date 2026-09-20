import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up9vchbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up9vchbgk"/>`,
		"fallback": "tabler:adjustments-question",
	});
}

export default Component;
