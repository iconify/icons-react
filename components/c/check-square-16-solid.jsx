import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdjlbn8gp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdjlbn8gp"/>`,
		"fallback": "sidekickicons:check-square-16-solid",
	});
}

export default Component;
