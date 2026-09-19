import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e74zqbzmi.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e74zqbzmi"/>`,
		"fallback": "whh:controlpanel",
	});
}

export default Component;
