import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k7zv8zo7d.css';
import '../../css/z/z6splzb2k.css';
import '../../css/q/q-qoe2btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k7zv8zo7d"/><path class="z6splzb2k"/><path class="q-qoe2btc"/></g>`,
		"fallback": "tabler:ball-american-football",
	});
}

export default Component;
