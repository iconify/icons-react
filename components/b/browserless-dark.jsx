import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jqyxvub6s.css';
import '../../css/k/klxq62e5o.css';

const viewBox = {"width":156,"height":41};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><g clip-path="url(#SVGukZmTdcY)"><path class="jqyxvub6s"/></g><defs><clipPath id="SVGukZmTdcY"><path class="klxq62e5o"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:browserless-dark",
	});
}

export default Component;
