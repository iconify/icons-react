import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7w121h3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7w121h3i"/>`,
		"fallback": "tabler:currency",
	});
}

export default Component;
