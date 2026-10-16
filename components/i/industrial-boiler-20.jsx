import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwuwdzb4d.css';
import '../../css/b/bxnfngy9v.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwuwdzb4d"/><path class="bxnfngy9v"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:industrial-boiler-20",
	});
}

export default Component;
