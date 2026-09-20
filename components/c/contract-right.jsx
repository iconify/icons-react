import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tw_z2h7wp.css';
import '../../css/o/o5f44tb4b.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tw_z2h7wp"/><path class="o5f44tb4b"/></g>`,
		"fallback": "marketeq:contract-right",
	});
}

export default Component;
