import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bons_pz5e.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bons_pz5e"/>`,
		"fallback": "whh:greenhosting",
	});
}

export default Component;
