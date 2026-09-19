import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc3tj3bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc3tj3bus"/>`,
		"fallback": "cbi:airgradient-one",
	});
}

export default Component;
