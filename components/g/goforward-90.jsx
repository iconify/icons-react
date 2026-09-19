import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uovdbjbel.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uovdbjbel"/>`,
		"fallback": "f7:goforward-90",
	});
}

export default Component;
