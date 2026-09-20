import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdgb8zclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdgb8zclj"/>`,
		"fallback": "tabler:currency-real",
	});
}

export default Component;
