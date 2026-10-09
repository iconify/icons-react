import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu9o71bva.css';
import '../../css/r/rudk7ubrf.css';
import '../../css/u/u2axsqyum.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu9o71bva"/><path class="rudk7ubrf"/><path class="u2axsqyum"/>`,
		"fallback": "energy-icons:blade-transport-48-bold",
	});
}

export default Component;
