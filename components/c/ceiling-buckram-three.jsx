import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boah2vobs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boah2vobs"/>`,
		"fallback": "cbi:ceiling-buckram-three",
	});
}

export default Component;
