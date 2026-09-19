import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dho3j2bli.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dho3j2bli"/>`,
		"fallback": "whh:escalator",
	});
}

export default Component;
