import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bpmks7bpo.css';
import '../../css/a/afrzd5aus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bpmks7bpo"/><path class="afrzd5aus"/></g>`,
		"fallback": "hugeicons:account-setting-02",
	});
}

export default Component;
