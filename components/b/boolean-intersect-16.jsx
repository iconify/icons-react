import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvy7wv0fh.css';
import '../../css/q/qnudf1dbo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvy7wv0fh"/><path clip-rule="evenodd" class="qnudf1dbo"/>`,
		"fallback": "qlementine-icons:boolean-intersect-16",
	});
}

export default Component;
