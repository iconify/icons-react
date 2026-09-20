import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgbl4_qde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgbl4_qde"/>`,
		"fallback": "tabler:device-mobile-exclamation",
	});
}

export default Component;
