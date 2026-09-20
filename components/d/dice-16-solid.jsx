import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scn5v8bhh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scn5v8bhh"/>`,
		"fallback": "sidekickicons:dice-16-solid",
	});
}

export default Component;
