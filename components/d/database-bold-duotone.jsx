import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj705hhir.css';
import '../../css/i/ios08bb7p.css';
import '../../css/x/xi4-07bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj705hhir"/><path class="ios08bb7p"/><path class="xi4-07bfd"/>`,
		"fallback": "solar:database-bold-duotone",
	});
}

export default Component;
