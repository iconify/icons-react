import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly6jl_bkj.css';
import '../../css/z/zrcrh4bnb.css';
import '../../css/j/j0-a04gjv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ly6jl_bkj"><circle class="zrcrh4bnb"/><path class="j0-a04gjv"/></g>`,
		"fallback": "icon-park:baseball-bat",
	});
}

export default Component;
