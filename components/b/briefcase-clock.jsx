import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zplly2b-w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zplly2b-w"/>`,
		"fallback": "fa7-solid:briefcase-clock",
	});
}

export default Component;
