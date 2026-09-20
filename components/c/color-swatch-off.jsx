import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf371-bve.css';
import '../../css/p/pu-_ysbmq.css';
import '../../css/n/nrfg08b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lf371-bve"/><path class="pu-_ysbmq"/><path class="nrfg08b3u"/></g>`,
		"fallback": "tabler:color-swatch-off",
	});
}

export default Component;
