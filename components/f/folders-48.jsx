import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4-_f1bng.css';
import '../../css/c/ccwmrkkue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4-_f1bng"/><path class="ccwmrkkue"/>`,
		"fallback": "energy-icons:folders-48",
	});
}

export default Component;
