import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbmk7ebis.css';
import '../../css/n/nnln5nbkq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbmk7ebis"/><path class="nnln5nbkq"/>`,
		"fallback": "streamline-pixel:ecology-wood-plant-grow",
	});
}

export default Component;
