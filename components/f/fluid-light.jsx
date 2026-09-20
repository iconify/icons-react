import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1ctc1phm.css';
import '../../css/y/ypchirliy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1ctc1phm"/><path class="ypchirliy"/>`,
		"fallback": "lets-icons:fluid-light",
	});
}

export default Component;
