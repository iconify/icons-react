import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qshz47b2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qshz47b2x"/>`,
		"fallback": "famicons:arrow-undo-circle-sharp",
	});
}

export default Component;
