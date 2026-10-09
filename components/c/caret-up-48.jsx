import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw78uccpx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw78uccpx"/>`,
		"fallback": "energy-icons:caret-up-48",
	});
}

export default Component;
