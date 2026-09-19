import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulw6jrbma.css';
import '../../css/j/jg-s2j-2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulw6jrbma"/><path class="jg-s2j-2x"/>`,
		"fallback": "bxl:bitcoin-logo",
	});
}

export default Component;
