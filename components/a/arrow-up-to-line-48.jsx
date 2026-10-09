import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7lu9sbrx.css';
import '../../css/r/rqz9a6b2h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7lu9sbrx"/><path class="rqz9a6b2h"/>`,
		"fallback": "energy-icons:arrow-up-to-line-48",
	});
}

export default Component;
