import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/ycywf9bkx.css';
import '../../css/y/yanghnb-v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ycywf9bkx"/><path class="yanghnb-v"/></g>`,
		"fallback": "marketeq:down-junction-sign",
	});
}

export default Component;
