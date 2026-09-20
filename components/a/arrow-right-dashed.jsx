import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuleku48b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuleku48b"/>`,
		"fallback": "tabler:arrow-right-dashed",
	});
}

export default Component;
