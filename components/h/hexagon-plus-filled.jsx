import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amvuscwat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amvuscwat"/>`,
		"fallback": "tabler:hexagon-plus-filled",
	});
}

export default Component;
