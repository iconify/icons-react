import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pzrcucb8m.css';
import '../../css/t/t5ncoybzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pzrcucb8m"/><path class="t5ncoybzh"/></g>`,
		"fallback": "tabler:device-tablet-spark",
	});
}

export default Component;
