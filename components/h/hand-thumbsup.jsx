import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa6yx-bxx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa6yx-bxx"/>`,
		"fallback": "f7:hand-thumbsup",
	});
}

export default Component;
