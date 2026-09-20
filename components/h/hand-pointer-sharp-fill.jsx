import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_ex82bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i_ex82bcy"/>`,
		"fallback": "keyline-icons:hand-pointer-sharp-fill",
	});
}

export default Component;
