import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo454jbyb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo454jbyb"/>`,
		"fallback": "map:clothing-store",
	});
}

export default Component;
