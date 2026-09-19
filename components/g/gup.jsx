import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky2xp9bva.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky2xp9bva"/>`,
		"fallback": "cryptocurrency:gup",
	});
}

export default Component;
