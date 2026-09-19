import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3nfatbmy.css';
import '../../css/l/lppl2sbhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3nfatbmy"/><path class="lppl2sbhj"/>`,
		"fallback": "carbon:group-objects-save",
	});
}

export default Component;
