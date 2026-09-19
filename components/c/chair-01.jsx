import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o3bsa3b3l.css';
import '../../css/o/ognykqjii.css';
import '../../css/x/xzgh_vbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o3bsa3b3l"/><path class="ognykqjii"/><path class="xzgh_vbuh"/></g>`,
		"fallback": "hugeicons:chair-01",
	});
}

export default Component;
