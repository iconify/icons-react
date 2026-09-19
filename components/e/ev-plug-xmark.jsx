import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/me0ufb1cz.css';
import '../../css/p/p-aa2ksww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="me0ufb1cz"/><path class="p-aa2ksww"/></g>`,
		"fallback": "iconoir:ev-plug-xmark",
	});
}

export default Component;
