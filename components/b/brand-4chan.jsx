import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/unn76bgmm.css';
import '../../css/t/tizophb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="unn76bgmm"/><path class="tizophb3u"/></g>`,
		"fallback": "tabler:brand-4chan",
	});
}

export default Component;
