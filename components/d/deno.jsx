import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzqkn_xju.css';
import '../../css/q/q-on95byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzqkn_xju"/><path class="q-on95byi"/>`,
		"fallback": "bxl:deno",
	});
}

export default Component;
