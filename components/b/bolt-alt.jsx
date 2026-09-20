import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb2zonbao.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb2zonbao"/>`,
		"fallback": "lineicons:bolt-alt",
	});
}

export default Component;
