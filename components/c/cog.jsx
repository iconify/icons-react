import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfim0fz_r.css';

const viewBox = {"width":740,"height":830};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfim0fz_r"/>`,
		"fallback": "il:cog",
	});
}

export default Component;
