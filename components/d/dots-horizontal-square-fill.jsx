import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esfv007el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esfv007el"/>`,
		"fallback": "mage:dots-horizontal-square-fill",
	});
}

export default Component;
