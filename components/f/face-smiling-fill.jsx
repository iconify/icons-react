import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdy033b6z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdy033b6z"/>`,
		"fallback": "f7:face-smiling-fill",
	});
}

export default Component;
