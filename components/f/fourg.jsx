import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-f2qv2rw.css';

const viewBox = {"width":1025,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-f2qv2rw"/>`,
		"fallback": "whh:fourg",
	});
}

export default Component;
