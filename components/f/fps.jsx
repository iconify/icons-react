import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai4xf_p-i.css';
import '../../css/u/u-gxd5_sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai4xf_p-i"/><path class="u-gxd5_sc"/>`,
		"fallback": "token:fps",
	});
}

export default Component;
