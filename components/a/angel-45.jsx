import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xog7sdbgn.css';
import '../../css/s/srt2cabok.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xog7sdbgn"/><path class="srt2cabok"/></g>`,
		"fallback": "marketeq:angel-45",
	});
}

export default Component;
