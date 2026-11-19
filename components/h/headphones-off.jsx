import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rboh__cca.css';
import '../../css/e/eqa66fgki.css';
import '../../css/c/cpgl-6bff.css';
import '../../css/s/s355jjnql.css';
import '../../css/f/fzc0v4b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rboh__cca"/><path class="eqa66fgki"/><path class="cpgl-6bff"/><path class="s355jjnql"/><path class="fzc0v4b0l"/></g>`,
		"fallback": "andrsrxn:headphones-off",
	});
}

export default Component;
