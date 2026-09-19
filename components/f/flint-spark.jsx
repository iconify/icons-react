import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfu2wkbii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfu2wkbii"/>`,
		"fallback": "game-icons:flint-spark",
	});
}

export default Component;
