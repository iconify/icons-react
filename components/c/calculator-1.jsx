import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqby38bfg.css';
import '../../css/u/uzk27_m6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqby38bfg"/><path class="uzk27_m6s"/>`,
		"fallback": "lineicons:calculator-1",
	});
}

export default Component;
