import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe_3scbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe_3scbym"/>`,
		"fallback": "si:garage-line",
	});
}

export default Component;
