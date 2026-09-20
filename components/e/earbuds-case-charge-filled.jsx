import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk_s2sw1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pk_s2sw1h"/>`,
		"fallback": "reicon:earbuds-case-charge-filled",
	});
}

export default Component;
