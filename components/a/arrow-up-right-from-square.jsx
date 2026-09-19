import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwgfh2bmr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwgfh2bmr"/>`,
		"fallback": "gravity-ui:arrow-up-right-from-square",
	});
}

export default Component;
