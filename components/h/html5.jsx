import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o84_zbj9g.css';
import '../../css/b/bj7d1e_oq.css';
import '../../css/m/mr9gv2b4t.css';
import '../../css/q/q308abc8x.css';

const viewBox = {"width":452,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o84_zbj9g"/><path class="bj7d1e_oq"/><path class="mr9gv2b4t"/><path class="q308abc8x"/>`,
		"fallback": "thesvg-color:html5",
	});
}

export default Component;
