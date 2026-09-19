import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9ocujzsb.css';
import '../../css/v/va-9bkvho.css';
import '../../css/y/y7ctxsu2m.css';
import '../../css/b/brn_jbgsk.css';
import '../../css/n/ng5d0w9of.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9ocujzsb"/><path class="va-9bkvho"/><path class="y7ctxsu2m"/><path class="brn_jbgsk"/><path class="ng5d0w9of"/>`,
		"fallback": "fxemoji:factory",
	});
}

export default Component;
