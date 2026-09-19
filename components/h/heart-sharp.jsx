import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh0svybfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh0svybfe"/>`,
		"fallback": "famicons:heart-sharp",
	});
}

export default Component;
