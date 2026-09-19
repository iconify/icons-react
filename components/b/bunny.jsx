import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps6n6j5jn.css';
import '../../css/t/ttigw5b6h.css';
import '../../css/e/ej8id9bze.css';
import '../../css/e/eyppoibfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps6n6j5jn"/><path class="ttigw5b6h"/><path class="ej8id9bze"/><path class="eyppoibfq"/>`,
		"fallback": "fxemoji:bunny",
	});
}

export default Component;
