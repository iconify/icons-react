import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgk0sjdeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgk0sjdeg"/>`,
		"fallback": "keyline-icons:face-frown-sharp",
	});
}

export default Component;
