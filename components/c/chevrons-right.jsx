import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj9q3ubwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj9q3ubwa"/>`,
		"fallback": "tabler:chevrons-right",
	});
}

export default Component;
