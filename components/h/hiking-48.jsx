import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v16uh-byn.css';
import '../../css/s/sahyts8de.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v16uh-byn"/><path class="sahyts8de"/>`,
		"fallback": "energy-icons:hiking-48",
	});
}

export default Component;
