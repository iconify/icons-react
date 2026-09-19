import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xwwi3buwt.css';
import '../../css/x/xg_7u0-or.css';
import '../../css/o/o0gvmjbgi.css';
import '../../css/e/en4ykbb1m.css';
import '../../css/t/tt7bx8hmh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="xwwi3buwt"/><path class="xg_7u0-or"/><path class="o0gvmjbgi"/><path class="en4ykbb1m"/><path class="tt7bx8hmh"/></g>`,
		"fallback": "icon-park:cocktail",
	});
}

export default Component;
