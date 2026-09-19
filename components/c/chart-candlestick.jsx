import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgno_hn4s.css';
import '../../css/h/hgpzimtyu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgno_hn4s"/><path class="hgpzimtyu"/>`,
		"fallback": "carbon:chart-candlestick",
	});
}

export default Component;
