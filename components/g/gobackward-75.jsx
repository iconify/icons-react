import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9wi5p_9x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9wi5p_9x"/>`,
		"fallback": "f7:gobackward-75",
	});
}

export default Component;
