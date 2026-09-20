import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldtu0gu7y.css';
import '../../css/t/tdnjtvgqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldtu0gu7y"/><path class="tdnjtvgqv"/>`,
		"fallback": "pixel:arrow-circle-down",
	});
}

export default Component;
