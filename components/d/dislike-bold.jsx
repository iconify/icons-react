import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljfitzhle.css';
import '../../css/r/r90ig9mfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljfitzhle"/><path class="r90ig9mfv"/>`,
		"fallback": "solar:dislike-bold",
	});
}

export default Component;
