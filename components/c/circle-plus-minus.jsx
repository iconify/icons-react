import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifep767hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifep767hf"/>`,
		"fallback": "tabler:circle-plus-minus",
	});
}

export default Component;
