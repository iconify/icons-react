import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax6hn1byu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ax6hn1byu"/>`,
		"fallback": "sidekickicons:gender-male-16-solid",
	});
}

export default Component;
