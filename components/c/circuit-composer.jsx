import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhvfzxc8c.css';
import '../../css/k/km4pjabfy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhvfzxc8c"/><path class="km4pjabfy"/>`,
		"fallback": "carbon:circuit-composer",
	});
}

export default Component;
