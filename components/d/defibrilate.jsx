import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arz71r5ro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arz71r5ro"/>`,
		"fallback": "game-icons:defibrilate",
	});
}

export default Component;
