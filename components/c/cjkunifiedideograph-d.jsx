import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffqc2rbjq.css';
import '../../css/k/kxplkmb3y.css';
import '../../css/l/l8iy2ebao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffqc2rbjq"/><path class="kxplkmb3y"/><path class="l8iy2ebao"/>`,
		"fallback": "fxemoji:cjkunifiedideograph-d",
	});
}

export default Component;
