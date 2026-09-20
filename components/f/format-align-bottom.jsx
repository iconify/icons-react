import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdg7s_bla.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdg7s_bla"/>`,
		"fallback": "memory:format-align-bottom",
	});
}

export default Component;
