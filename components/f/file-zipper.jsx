import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjw1ds2yi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjw1ds2yi"/>`,
		"fallback": "fa7-solid:file-zipper",
	});
}

export default Component;
