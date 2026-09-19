import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjexghgat.css';
import '../../css/m/mohe2-hat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjexghgat"/><path class="mohe2-hat"/>`,
		"fallback": "boxicons:bird-alt-filled",
	});
}

export default Component;
