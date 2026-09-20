import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqw673b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqw673b2g"/>`,
		"fallback": "keyline-icons:droplets-fill",
	});
}

export default Component;
