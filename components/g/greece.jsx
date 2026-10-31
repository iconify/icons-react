import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/i/iapy6-b3y.css';
import '../../css/k/k4nbd5bvn.css';
import '../../css/p/pw1ieubeh.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="iapy6-b3y"/><path class="k4nbd5bvn"/><path class="pw1ieubeh"/>`,
		"fallback": "tabler-flags:greece",
	});
}

export default Component;
