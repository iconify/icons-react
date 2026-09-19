import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjx9v6g-t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjx9v6g-t"/>`,
		"fallback": "fa7-solid:hashtag",
	});
}

export default Component;
