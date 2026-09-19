import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekmislbif.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekmislbif"/>`,
		"fallback": "at-icons:arrow-turn-left-up",
	});
}

export default Component;
