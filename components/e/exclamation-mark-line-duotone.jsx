import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xqplh-1nb.css';
import '../../css/a/azdzsac_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xqplh-1nb"/><path class="azdzsac_a"/></g>`,
		"fallback": "solar:exclamation-mark-line-duotone",
	});
}

export default Component;
