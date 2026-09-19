import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agrwl2bpx.css';

const viewBox = {"width":563,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agrwl2bpx"/>`,
		"fallback": "ls:b",
	});
}

export default Component;
