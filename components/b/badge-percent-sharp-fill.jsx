import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux20_bc-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ux20_bc-t"/>`,
		"fallback": "keyline-icons:badge-percent-sharp-fill",
	});
}

export default Component;
