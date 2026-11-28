import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixr5k-b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixr5k-b3a"/>`,
		"fallback": "noviair:beer-plus",
	});
}

export default Component;
