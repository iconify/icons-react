import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1u9eup1x.css';
import '../../css/c/c-2oib_0h.css';
import '../../css/x/xsqv3_b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j1u9eup1x"/><path class="c-2oib_0h"/><path class="xsqv3_b2f"/></g>`,
		"fallback": "tabler:diabolo-plus",
	});
}

export default Component;
