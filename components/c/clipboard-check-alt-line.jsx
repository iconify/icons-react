import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr-0gy2dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr-0gy2dt"/>`,
		"fallback": "si:clipboard-check-alt-line",
	});
}

export default Component;
