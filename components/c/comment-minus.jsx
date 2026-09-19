import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqgq8bbqo.css';
import '../../css/k/kys9qibdi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqgq8bbqo"/><path class="kys9qibdi"/>`,
		"fallback": "foundation:comment-minus",
	});
}

export default Component;
