import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/ekubj9bjx.css';
import '../../css/v/vp-ehtucm.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ekubj9bjx"/><path class="vp-ehtucm"/></g>`,
		"fallback": "marketeq:file-6",
	});
}

export default Component;
