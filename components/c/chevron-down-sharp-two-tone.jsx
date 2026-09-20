import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z64_rrb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z64_rrb0q"/>`,
		"fallback": "keyline-icons:chevron-down-sharp-two-tone",
	});
}

export default Component;
