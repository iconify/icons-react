import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzt_2ac2s.css';
import '../../css/v/vyl_3wa6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzt_2ac2s"/><path class="vyl_3wa6r"/>`,
		"fallback": "mage:chip-fill",
	});
}

export default Component;
