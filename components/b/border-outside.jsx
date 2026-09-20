import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iudf_ab8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iudf_ab8d"/>`,
		"fallback": "mdi-light:border-outside",
	});
}

export default Component;
