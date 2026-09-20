import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q42marync.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q42marync"/>`,
		"fallback": "map:city-hall",
	});
}

export default Component;
