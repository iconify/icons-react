import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an6bpbblv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an6bpbblv"/>`,
		"fallback": "sidekickicons:chevron-right-left-16-solid",
	});
}

export default Component;
