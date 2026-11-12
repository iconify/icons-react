import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r441srq3o.css';
import '../../css/l/lcb8-svgs.css';
import '../../css/r/r0wa9gb5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r441srq3o"/><path class="lcb8-svgs"/><path class="r0wa9gb5j"/>`,
		"fallback": "selfhst:gryt-dark",
	});
}

export default Component;
