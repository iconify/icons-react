import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8av2q_by.css';
import '../../css/v/vwqq62bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q8av2q_by"/><rect class="vwqq62bgt"/></g>`,
		"fallback": "lucide:decimals-arrow-left",
	});
}

export default Component;
