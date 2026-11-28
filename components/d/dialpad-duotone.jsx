import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m942_cbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m942_cbxv primary"/>`,
		"fallback": "iconaut:dialpad-duotone",
	});
}

export default Component;
