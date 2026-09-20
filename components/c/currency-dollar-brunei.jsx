import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq9mwsb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq9mwsb1q"/>`,
		"fallback": "tabler:currency-dollar-brunei",
	});
}

export default Component;
