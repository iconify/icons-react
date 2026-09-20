import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoaml5x3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoaml5x3t"/>`,
		"fallback": "uil:accessible-icon-alt",
	});
}

export default Component;
