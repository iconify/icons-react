import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-9lwzflx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-9lwzflx"/>`,
		"fallback": "heroicons-solid:globe-asia-australia",
	});
}

export default Component;
