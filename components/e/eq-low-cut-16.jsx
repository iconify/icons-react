import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs6jyqhex.css';
import '../../css/f/f6s9xdlma.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs6jyqhex"/><path class="f6s9xdlma"/>`,
		"fallback": "qlementine-icons:eq-low-cut-16",
	});
}

export default Component;
