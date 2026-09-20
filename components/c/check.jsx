import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etofa9b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etofa9b-k"/>`,
		"fallback": "keyline-icons:check",
	});
}

export default Component;
