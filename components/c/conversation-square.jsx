import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sahyzxjza.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sahyzxjza"/>`,
		"fallback": "academicons:conversation-square",
	});
}

export default Component;
