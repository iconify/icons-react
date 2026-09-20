import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erpofacwv.css';
import '../../css/h/hj78mwx4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erpofacwv"/><path clip-rule="evenodd" class="hj78mwx4s"/>`,
		"fallback": "si:ai-fact-fill",
	});
}

export default Component;
