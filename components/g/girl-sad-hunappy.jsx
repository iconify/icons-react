import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu2j1g89h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu2j1g89h"/>`,
		"fallback": "ps:girl-sad-hunappy",
	});
}

export default Component;
