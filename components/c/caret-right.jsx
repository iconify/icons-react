import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr-5ntbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr-5ntbhr"/>`,
		"fallback": "fontisto:caret-right",
	});
}

export default Component;
