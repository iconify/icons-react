import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p11zjbbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p11zjbbpy"/>`,
		"fallback": "tabler:circle-dashed-number-0",
	});
}

export default Component;
