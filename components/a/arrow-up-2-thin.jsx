import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrnekj3ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrnekj3ht"/>`,
		"fallback": "iconamoon:arrow-up-2-thin",
	});
}

export default Component;
