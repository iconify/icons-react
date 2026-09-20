import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze8ppqcua.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze8ppqcua"/>`,
		"fallback": "lineicons:indent-decrease",
	});
}

export default Component;
