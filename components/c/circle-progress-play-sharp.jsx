import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo36oacna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo36oacna"/>`,
		"fallback": "keyline-icons:circle-progress-play-sharp",
	});
}

export default Component;
