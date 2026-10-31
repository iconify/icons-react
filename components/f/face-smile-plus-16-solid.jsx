import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8qsur3ti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8qsur3ti"/>`,
		"fallback": "sidekickicons:face-smile-plus-16-solid",
	});
}

export default Component;
