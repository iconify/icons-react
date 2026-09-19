import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ty83eqb9r.css';
import '../../css/m/md286fbip.css';
import '../../css/x/x-nm-pbbn.css';
import '../../css/p/pqll-jyub.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ty83eqb9r"/><g class="md286fbip"><path class="x-nm-pbbn"/><path class="pqll-jyub"/></g></g>`,
		"fallback": "cryptocurrency-color:dth",
	});
}

export default Component;
