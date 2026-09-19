import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6sj3bcmj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6sj3bcmj"/>`,
		"fallback": "fa6-regular:circle-question",
	});
}

export default Component;
