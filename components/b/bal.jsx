import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amzs62l_r.css';
import '../../css/m/md286fbip.css';
import '../../css/p/pthgwib3v.css';
import '../../css/n/nodvywbpm.css';
import '../../css/j/jblli5bgd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="amzs62l_r"/><g class="md286fbip"><path class="pthgwib3v"/><path class="nodvywbpm"/><path class="jblli5bgd"/></g></g>`,
		"fallback": "cryptocurrency-color:bal",
	});
}

export default Component;
