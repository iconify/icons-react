import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaxcsz8rc.css';
import '../../css/r/rzy0o9f7l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaxcsz8rc"/><path class="rzy0o9f7l"/>`,
		"fallback": "energy-icons:cheese-48",
	});
}

export default Component;
