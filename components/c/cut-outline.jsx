import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob03_5z6s.css';
import '../../css/y/ya_ah-bgp.css';
import '../../css/q/q6q3hcc8y.css';
import '../../css/l/leddtrblw.css';
import '../../css/r/rz66g3bfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ob03_5z6s"/><circle class="ya_ah-bgp"/><path class="q6q3hcc8y"/><path class="leddtrblw"/><circle class="rz66g3bfw"/>`,
		"fallback": "famicons:cut-outline",
	});
}

export default Component;
