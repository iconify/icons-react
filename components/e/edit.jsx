import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko_3_kw6e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko_3_kw6e"/>`,
		"fallback": "fa7-regular:edit",
	});
}

export default Component;
