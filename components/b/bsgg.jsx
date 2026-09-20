import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5_mrgt4f.css';
import '../../css/f/f86ggwbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5_mrgt4f"/><path class="f86ggwbgz"/>`,
		"fallback": "token:bsgg",
	});
}

export default Component;
