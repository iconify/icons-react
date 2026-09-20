import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp3zz-bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp3zz-bfk"/>`,
		"fallback": "thesvg-color:font-awesome",
	});
}

export default Component;
