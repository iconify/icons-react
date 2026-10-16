import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f36_sk0cx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f36_sk0cx"/>`,
		"fallback": "energy-icons:focus-48",
	});
}

export default Component;
