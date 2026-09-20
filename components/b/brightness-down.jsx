import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/excfc4j-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="excfc4j-b"/>`,
		"fallback": "tabler:brightness-down",
	});
}

export default Component;
