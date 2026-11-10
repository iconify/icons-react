import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5n5_gptj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s5n5_gptj"/>`,
		"fallback": "sidekickicons:calendar-arrow-path-16-solid",
	});
}

export default Component;
