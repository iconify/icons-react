import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj0jy4-my.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uj0jy4-my"/>`,
		"fallback": "gravity-ui:cubes-3-overlap",
	});
}

export default Component;
