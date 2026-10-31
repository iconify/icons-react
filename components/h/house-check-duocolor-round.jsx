import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shhtmacsp.css';
import '../../css/l/lueqmvvgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="shhtmacsp"/><path class="lueqmvvgx"/></g>`,
		"fallback": "coolicons:house-check-duocolor-round",
	});
}

export default Component;
