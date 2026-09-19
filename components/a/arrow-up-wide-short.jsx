import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_2qg0fkn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_2qg0fkn"/>`,
		"fallback": "fa6-solid:arrow-up-wide-short",
	});
}

export default Component;
