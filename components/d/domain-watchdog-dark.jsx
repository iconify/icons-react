import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7d_9oypd.css';
import '../../css/l/luvx9bb7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7d_9oypd"/><path class="luvx9bb7p"/>`,
		"fallback": "selfhst:domain-watchdog-dark",
	});
}

export default Component;
