import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3otsgbce.css';
import '../../css/k/kybyvbvqh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3otsgbce"/><circle class="kybyvbvqh"/>`,
		"fallback": "carbon:boolean",
	});
}

export default Component;
