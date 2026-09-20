import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhz-jlbqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhz-jlbqx"/>`,
		"fallback": "selfhst:amcrest-dark",
	});
}

export default Component;
