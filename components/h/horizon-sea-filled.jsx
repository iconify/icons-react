import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy97d27iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy97d27iw"/>`,
		"fallback": "boxicons:horizon-sea-filled",
	});
}

export default Component;
