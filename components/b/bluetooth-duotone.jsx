import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnyl9fv0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnyl9fv0q"/>`,
		"fallback": "keyline-icons:bluetooth-duotone",
	});
}

export default Component;
