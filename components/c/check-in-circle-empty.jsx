import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsbipqluu.css';
import '../../css/m/m723m1bzf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsbipqluu"/><path clip-rule="evenodd" class="m723m1bzf"/>`,
		"fallback": "oui:check-in-circle-empty",
	});
}

export default Component;
