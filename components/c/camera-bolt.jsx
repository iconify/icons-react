import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzo7-e_dt.css';
import '../../css/a/ao7ppiy0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dzo7-e_dt"/><path class="ao7ppiy0e"/></g>`,
		"fallback": "tabler:camera-bolt",
	});
}

export default Component;
