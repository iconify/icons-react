import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao-aiub9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ao-aiub9u"/>`,
		"fallback": "file-icons:dosbox",
	});
}

export default Component;
