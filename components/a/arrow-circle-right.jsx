import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jglg2ik2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jglg2ik2f"/>`,
		"fallback": "heroicons-solid:arrow-circle-right",
	});
}

export default Component;
