import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4b69pz9m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4b69pz9m"/>`,
		"fallback": "pinhead:happy-face-with-face-mask",
	});
}

export default Component;
