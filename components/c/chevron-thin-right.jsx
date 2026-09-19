import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5zaismrw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5zaismrw"/>`,
		"fallback": "entypo:chevron-thin-right",
	});
}

export default Component;
