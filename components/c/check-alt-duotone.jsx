import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar4e_gbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar4e_gbjw"/>`,
		"fallback": "si:check-alt-duotone",
	});
}

export default Component;
