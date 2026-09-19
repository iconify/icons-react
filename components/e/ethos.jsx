import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkj-c5bmo.css';
import '../../css/m/md286fbip.css';
import '../../css/q/qz8pqxbrv.css';
import '../../css/r/r60l57pvp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="nkj-c5bmo"/><g class="md286fbip"><path class="qz8pqxbrv"/><path class="r60l57pvp"/></g></g>`,
		"fallback": "cryptocurrency-color:ethos",
	});
}

export default Component;
