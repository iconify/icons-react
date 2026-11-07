import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2-x-cbeh.css';
import '../../css/f/fhhc7bnyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2-x-cbeh"/><path class="fhhc7bnyb"/>`,
		"fallback": "solar:grid-3x2-bold-duotone",
	});
}

export default Component;
