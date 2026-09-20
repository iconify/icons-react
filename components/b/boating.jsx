import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpwsljmej.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpwsljmej"/>`,
		"fallback": "temaki:boating",
	});
}

export default Component;
