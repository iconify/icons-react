import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujp3zn38v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujp3zn38v"/>`,
		"fallback": "famicons:arrow-undo-sharp",
	});
}

export default Component;
