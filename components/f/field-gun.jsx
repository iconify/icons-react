import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcmit3xpp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcmit3xpp"/>`,
		"fallback": "game-icons:field-gun",
	});
}

export default Component;
