import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-q20mb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-q20mb_a"/>`,
		"fallback": "tabler:arrow-bar-to-up-dashed",
	});
}

export default Component;
