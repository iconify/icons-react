import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cgy9vuh7d.css';
import '../../css/i/ilu-h0bpn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="cgy9vuh7d"/><path class="ilu-h0bpn"/></g>`,
		"fallback": "cryptocurrency-color:fct",
	});
}

export default Component;
