import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7c-2eb5a.css';
import '../../css/r/r1nvtit5z.css';
import '../../css/s/snwmkb8ok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7c-2eb5a"/><path class="r1nvtit5z"/><path class="snwmkb8ok"/>`,
		"fallback": "selfhst:colota",
	});
}

export default Component;
