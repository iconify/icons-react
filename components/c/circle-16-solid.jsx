import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbgpe8b5p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rbgpe8b5p"/>`,
		"fallback": "sidekickicons:circle-16-solid",
	});
}

export default Component;
