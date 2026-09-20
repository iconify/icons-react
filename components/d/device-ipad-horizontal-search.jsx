import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l_1gngb2t.css';
import '../../css/f/fumudnnfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l_1gngb2t"/><path class="fumudnnfx"/></g>`,
		"fallback": "tabler:device-ipad-horizontal-search",
	});
}

export default Component;
