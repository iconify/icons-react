import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/oewa9mbqy.css';
import '../../css/t/tcqe6dyiy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="oewa9mbqy"/><path class="tcqe6dyiy"/></g>`,
		"fallback": "marketeq:envelope",
	});
}

export default Component;
