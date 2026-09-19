import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8uhoz76d.css';
import '../../css/q/q7qow0bez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8uhoz76d"/><path class="q7qow0bez"/>`,
		"fallback": "famicons:help-circle-sharp",
	});
}

export default Component;
