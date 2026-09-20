import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhs2-lbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vhs2-lbie"/>`,
		"fallback": "keyline-icons:circle-quarter-sharp-fill",
	});
}

export default Component;
