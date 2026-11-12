import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-h4qwbaf.css';
import '../../css/w/wyxbf2b8i.css';
import '../../css/h/hcq-4ebvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-h4qwbaf"/><path class="wyxbf2b8i"/><path class="hcq-4ebvn"/>`,
		"fallback": "selfhst:glances",
	});
}

export default Component;
