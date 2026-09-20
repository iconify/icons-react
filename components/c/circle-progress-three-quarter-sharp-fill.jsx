import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le_wqjn1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le_wqjn1j"/>`,
		"fallback": "keyline-icons:circle-progress-three-quarter-sharp-fill",
	});
}

export default Component;
