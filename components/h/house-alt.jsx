import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/disp4rbrd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="disp4rbrd"/>`,
		"fallback": "f7:house-alt",
	});
}

export default Component;
