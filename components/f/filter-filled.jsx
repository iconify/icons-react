import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyt90w0so.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyt90w0so"/>`,
		"fallback": "ix:filter-filled",
	});
}

export default Component;
