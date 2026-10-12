import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwnv2zbmo.css';
import '../../css/q/q0rdytb4g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwnv2zbmo"/><path class="q0rdytb4g"/>`,
		"fallback": "energy-icons:frog-20-bold",
	});
}

export default Component;
