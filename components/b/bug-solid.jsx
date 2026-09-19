import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_e59tbsr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_e59tbsr"/>`,
		"fallback": "fluent-mdl2:bug-solid",
	});
}

export default Component;
