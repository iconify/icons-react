import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eoe13w36s.css';
import '../../css/b/bjr4uf7pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eoe13w36s"/><path class="bjr4uf7pk"/></g>`,
		"fallback": "solar:arrow-left-to-line-broken",
	});
}

export default Component;
