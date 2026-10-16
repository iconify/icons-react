import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dom_6oycu.css';
import '../../css/k/k5lxwxbxz.css';
import '../../css/h/h284w7bzf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dom_6oycu"/><path class="k5lxwxbxz"/><path class="h284w7bzf"/>`,
		"fallback": "energy-icons:cam-20",
	});
}

export default Component;
