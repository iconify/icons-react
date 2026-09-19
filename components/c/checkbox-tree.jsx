import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlvzy9bfa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlvzy9bfa"/>`,
		"fallback": "game-icons:checkbox-tree",
	});
}

export default Component;
