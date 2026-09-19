import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf_759bfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf_759bfk"/>`,
		"fallback": "game-icons:car-wheel",
	});
}

export default Component;
