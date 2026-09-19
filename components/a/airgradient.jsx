import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w075n_c4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w075n_c4t"/>`,
		"fallback": "cbi:airgradient",
	});
}

export default Component;
