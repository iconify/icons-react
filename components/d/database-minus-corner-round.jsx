import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv2gc5bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv2gc5bze"/>`,
		"fallback": "coolicons:database-minus-corner-round",
	});
}

export default Component;
