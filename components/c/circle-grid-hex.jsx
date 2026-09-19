import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmflhjb1h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmflhjb1h"/>`,
		"fallback": "f7:circle-grid-hex",
	});
}

export default Component;
