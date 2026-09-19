import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyn9vhb5z.css';
import '../../css/t/t7g8bwb9l.css';
import '../../css/q/qb8-53b9l.css';
import '../../css/a/asqm2nmfa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="kyn9vhb5z"/><g class="t7g8bwb9l"><path class="qb8-53b9l"/><path class="asqm2nmfa"/></g></g>`,
		"fallback": "cryptocurrency-color:eon",
	});
}

export default Component;
