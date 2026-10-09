import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uspm4fblj.css';
import '../../css/c/c4gyc8b6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uspm4fblj"/><path class="c4gyc8b6a"/>`,
		"fallback": "energy-icons:arrow-up-right-48",
	});
}

export default Component;
