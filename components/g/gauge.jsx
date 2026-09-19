import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o24e-tbjw.css';
import '../../css/j/jzcm3cc4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o24e-tbjw"/><path class="jzcm3cc4e"/>`,
		"fallback": "cil:gauge",
	});
}

export default Component;
