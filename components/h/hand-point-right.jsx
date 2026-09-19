import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6-5tj1wr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6-5tj1wr"/>`,
		"fallback": "fa7-regular:hand-point-right",
	});
}

export default Component;
