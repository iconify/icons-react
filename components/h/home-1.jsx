import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i9w31vx7m.css';
import '../../css/u/ua4hl4bnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="i9w31vx7m"/><path class="ua4hl4bnb"/></g>`,
		"fallback": "streamline-plump-color:home-1",
	});
}

export default Component;
