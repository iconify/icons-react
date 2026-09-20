import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceau6_uqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceau6_uqw"/>`,
		"fallback": "ri:edge-new-fill",
	});
}

export default Component;
