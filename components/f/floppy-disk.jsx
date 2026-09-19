import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft7a-7c1r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft7a-7c1r"/>`,
		"fallback": "f7:floppy-disk",
	});
}

export default Component;
