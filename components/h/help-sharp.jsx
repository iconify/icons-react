import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuyntrele.css';
import '../../css/y/y8ocdrfcn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuyntrele"/><rect class="y8ocdrfcn"/>`,
		"fallback": "famicons:help-sharp",
	});
}

export default Component;
