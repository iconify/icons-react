import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2we-hbpo.css';
import '../../css/b/bd2w689nn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2we-hbpo"/><path class="bd2w689nn"/>`,
		"fallback": "garden:bell-strike-fill-20",
	});
}

export default Component;
