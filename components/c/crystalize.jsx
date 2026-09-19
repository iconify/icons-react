import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq_uh0yba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq_uh0yba"/>`,
		"fallback": "game-icons:crystalize",
	});
}

export default Component;
