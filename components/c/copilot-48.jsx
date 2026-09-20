import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdh5ety7c.css';
import '../../css/k/ktbpolgkg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdh5ety7c"/><path class="ktbpolgkg"/>`,
		"fallback": "octicon:copilot-48",
	});
}

export default Component;
