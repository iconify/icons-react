import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q26bobc_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q26bobc_l"/>`,
		"fallback": "proicons:circle-small",
	});
}

export default Component;
