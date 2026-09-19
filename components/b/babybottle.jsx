import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laa4xyb5b.css';
import '../../css/d/d1eq1m65j.css';
import '../../css/o/oltaxob6h.css';
import '../../css/w/w3alieb7z.css';
import '../../css/q/qnbwq0bmz.css';
import '../../css/w/wpti9uslf.css';
import '../../css/x/xe_wxac6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laa4xyb5b"/><path class="d1eq1m65j"/><path class="oltaxob6h"/><path class="w3alieb7z"/><path class="qnbwq0bmz"/><path class="wpti9uslf"/><path class="xe_wxac6h"/>`,
		"fallback": "fxemoji:babybottle",
	});
}

export default Component;
