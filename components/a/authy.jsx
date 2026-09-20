import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnhwnduys.css';
import '../../css/h/hgfh0_gbr.css';
import '../../css/o/o-byg3jhg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnhwnduys"/><path class="hgfh0_gbr"/><path class="o-byg3jhg"/>`,
		"fallback": "thesvg-color:authy",
	});
}

export default Component;
