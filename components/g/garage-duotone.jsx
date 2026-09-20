import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4xcodbxl.css';
import '../../css/p/pe_3scbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4xcodbxl"/><path class="pe_3scbym"/>`,
		"fallback": "si:garage-duotone",
	});
}

export default Component;
