import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjwaosbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjwaosbwi"/>`,
		"fallback": "griddy-icons:chevron-left-small-filled",
	});
}

export default Component;
