import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/civh5k3ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="civh5k3ed"/>`,
		"fallback": "thesvg:hedera",
	});
}

export default Component;
