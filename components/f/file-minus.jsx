import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc91mi2ol.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc91mi2ol"/>`,
		"fallback": "radix-icons:file-minus",
	});
}

export default Component;
