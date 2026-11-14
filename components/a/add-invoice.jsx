import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtrm-5ano.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtrm-5ano"/>`,
		"fallback": "hugeicons:add-invoice",
	});
}

export default Component;
