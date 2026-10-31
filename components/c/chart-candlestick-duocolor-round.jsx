import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbes49b5d.css';
import '../../css/s/sz_szbb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fbes49b5d"/><path class="sz_szbb7r"/></g>`,
		"fallback": "coolicons:chart-candlestick-duocolor-round",
	});
}

export default Component;
