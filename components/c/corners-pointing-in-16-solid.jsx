import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc_4xoalh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zc_4xoalh"/>`,
		"fallback": "sidekickicons:corners-pointing-in-16-solid",
	});
}

export default Component;
