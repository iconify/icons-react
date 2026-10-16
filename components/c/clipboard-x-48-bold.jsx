import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u95e4sw8e.css';
import '../../css/f/f7w-71w7o.css';
import '../../css/v/vix52acse.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u95e4sw8e"/><path class="f7w-71w7o"/><path class="vix52acse"/>`,
		"fallback": "energy-icons:clipboard-x-48-bold",
	});
}

export default Component;
