import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lidk6rnti.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lidk6rnti"/>`,
		"fallback": "fa7-brands:codepen",
	});
}

export default Component;
