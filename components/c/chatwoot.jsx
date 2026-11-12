import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rovxql1_a.css';
import '../../css/j/jtixhvb7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rovxql1_a"/><path class="jtixhvb7w"/>`,
		"fallback": "selfhst:chatwoot",
	});
}

export default Component;
