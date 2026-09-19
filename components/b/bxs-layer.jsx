import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zumhdobvu.css';
import '../../css/s/s26e84bqs.css';
import '../../css/x/xy5o6cs4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zumhdobvu"/><path class="s26e84bqs"/><path class="xy5o6cs4o"/>`,
		"fallback": "bx:bxs-layer",
	});
}

export default Component;
