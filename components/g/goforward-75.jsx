import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5-3g4bmu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5-3g4bmu"/>`,
		"fallback": "f7:goforward-75",
	});
}

export default Component;
