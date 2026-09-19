import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sljfn47mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sljfn47mh"/>`,
		"fallback": "heroicons:globe-americas-solid",
	});
}

export default Component;
