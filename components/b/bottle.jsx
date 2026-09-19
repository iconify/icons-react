import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls08edcnw.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls08edcnw"/>`,
		"fallback": "whh:bottle",
	});
}

export default Component;
