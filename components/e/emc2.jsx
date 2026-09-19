import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc4o63boo.css';
import '../../css/m/md286fbip.css';
import '../../css/v/v1ap4y4nx.css';
import '../../css/g/gyuj_8bfe.css';
import '../../css/j/j1jb155zg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="sc4o63boo"/><g class="md286fbip"><path class="v1ap4y4nx"/><path class="gyuj_8bfe"/><path class="j1jb155zg"/></g></g>`,
		"fallback": "cryptocurrency-color:emc2",
	});
}

export default Component;
