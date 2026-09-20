import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl3b5mb1m.css';
import '../../css/e/evze903ec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rl3b5mb1m"/><path class="evze903ec"/>`,
		"fallback": "selfhst:coursera",
	});
}

export default Component;
