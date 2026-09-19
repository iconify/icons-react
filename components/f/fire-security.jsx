import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tcsjdzb2n.css';
import '../../css/p/pp179kv3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tcsjdzb2n"/><path class="pp179kv3u"/></g>`,
		"fallback": "hugeicons:fire-security",
	});
}

export default Component;
