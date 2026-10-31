import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw3i65bxu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uw3i65bxu"/>`,
		"fallback": "sidekickicons:arc-third-16-solid",
	});
}

export default Component;
