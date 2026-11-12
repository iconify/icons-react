import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yktm7h6-w.css';
import '../../css/j/jyold6wus.css';
import '../../css/b/b671z779q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yktm7h6-w"/><path class="jyold6wus"/><path class="b671z779q"/>`,
		"fallback": "selfhst:fava",
	});
}

export default Component;
