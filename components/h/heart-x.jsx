import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu4i-n43a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu4i-n43a"/>`,
		"fallback": "tabler:heart-x",
	});
}

export default Component;
