import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ea5agfbhq.css';
import '../../css/n/nusc5nbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ea5agfbhq"/><path class="nusc5nbhn"/></g>`,
		"fallback": "tabler:fountain",
	});
}

export default Component;
