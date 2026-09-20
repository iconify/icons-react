import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr4pidc2z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr4pidc2z"/>`,
		"fallback": "pinhead:flat-head-thumb-tack",
	});
}

export default Component;
