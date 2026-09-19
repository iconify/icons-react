import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zai_d5b4i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zai_d5b4i"/>`,
		"fallback": "f7:arrow-down-right-square",
	});
}

export default Component;
