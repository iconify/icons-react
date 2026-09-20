import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q12v9tb1x.css';
import '../../css/w/wv6v3mzoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q12v9tb1x"/><path class="wv6v3mzoh"/></g>`,
		"fallback": "tabler:forklift",
	});
}

export default Component;
