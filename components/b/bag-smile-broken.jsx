import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vgdrhu2qc.css';
import '../../css/b/bomz11bhc.css';
import '../../css/v/v77ej-64o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vgdrhu2qc"/><path class="bomz11bhc"/><path class="v77ej-64o"/></g>`,
		"fallback": "solar:bag-smile-broken",
	});
}

export default Component;
