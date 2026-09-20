import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voeg6obyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voeg6obyp"/>`,
		"fallback": "stash:arrow-down-large-light",
	});
}

export default Component;
