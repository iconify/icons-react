import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqdkyobsr.css';
import '../../css/p/pw-txxw1n.css';
import '../../css/s/su-rh8qhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqdkyobsr"/><path class="pw-txxw1n"/><path class="su-rh8qhu"/>`,
		"fallback": "energy-icons:assembly-line-48",
	});
}

export default Component;
