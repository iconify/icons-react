import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw_tv4bka.css';
import '../../css/m/md286fbip.css';
import '../../css/a/abebsob6w.css';
import '../../css/t/tx-y2qaja.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="jw_tv4bka"/><g class="md286fbip"><path class="abebsob6w"/><path class="tx-y2qaja"/></g></g>`,
		"fallback": "cryptocurrency-color:gin",
	});
}

export default Component;
