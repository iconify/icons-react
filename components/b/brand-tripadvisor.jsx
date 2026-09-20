import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/da7-wmo7e.css';
import '../../css/n/nshz0cc9o.css';
import '../../css/a/av09fzcjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="da7-wmo7e"/><path class="nshz0cc9o"/><path class="av09fzcjd"/></g>`,
		"fallback": "tabler:brand-tripadvisor",
	});
}

export default Component;
