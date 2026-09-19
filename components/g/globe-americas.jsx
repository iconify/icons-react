import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6v57ysxe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n6v57ysxe"/>`,
		"fallback": "heroicons-solid:globe-americas",
	});
}

export default Component;
