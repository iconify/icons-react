import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib84k77zx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib84k77zx"/>`,
		"fallback": "famicons:barbell-sharp",
	});
}

export default Component;
