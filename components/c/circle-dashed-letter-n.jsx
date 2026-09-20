import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2mpx0jfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2mpx0jfd"/>`,
		"fallback": "tabler:circle-dashed-letter-n",
	});
}

export default Component;
