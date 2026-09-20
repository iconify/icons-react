import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e67bpz24e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e67bpz24e"/>`,
		"fallback": "tabler:circle-dashed-number-3",
	});
}

export default Component;
