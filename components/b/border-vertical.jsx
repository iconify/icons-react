import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haz8x-boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haz8x-boa"/>`,
		"fallback": "tabler:border-vertical",
	});
}

export default Component;
