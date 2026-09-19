import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyfge-bjz.css';
import '../../css/m/md286fbip.css';
import '../../css/r/ruoa3lbgv.css';
import '../../css/n/n00myyeap.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dyfge-bjz"/><g class="md286fbip"><path class="ruoa3lbgv"/><path class="n00myyeap"/></g></g>`,
		"fallback": "cryptocurrency-color:cix",
	});
}

export default Component;
