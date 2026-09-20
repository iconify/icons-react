import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy7q00b8z.css';
import '../../css/l/lbxyuzatw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy7q00b8z"/><path class="lbxyuzatw"/>`,
		"fallback": "pixel:external-link-solid",
	});
}

export default Component;
