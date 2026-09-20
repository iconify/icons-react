import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egqjriaqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egqjriaqz"/>`,
		"fallback": "thesvg-color:heroic-games-launcher",
	});
}

export default Component;
