import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytn98r1le.css';
import '../../css/h/hijr5tbvr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytn98r1le"/><path class="hijr5tbvr"/>`,
		"fallback": "vaadin:chart",
	});
}

export default Component;
