import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9ejun91r.css';
import '../../css/z/zb03b0nag.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9ejun91r"/><path class="zb03b0nag"/>`,
		"fallback": "fxemoji:evergreen",
	});
}

export default Component;
