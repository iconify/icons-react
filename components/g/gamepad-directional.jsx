import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkb8q8ewt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkb8q8ewt"/>`,
		"fallback": "lucide:gamepad-directional",
	});
}

export default Component;
