import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6gvhacvn.css';
import '../../css/c/cdb0kh8jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f6gvhacvn"/><path class="cdb0kh8jm"/></g>`,
		"fallback": "hugeicons:album-not-found-01",
	});
}

export default Component;
