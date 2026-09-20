import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmys1lirk.css';
import '../../css/l/lfy066c5u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmys1lirk"/><path class="lfy066c5u"/>`,
		"fallback": "openmoji:down-right-arrow",
	});
}

export default Component;
