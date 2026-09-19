import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhvui9tfq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhvui9tfq"/>`,
		"fallback": "f7:doc-append",
	});
}

export default Component;
