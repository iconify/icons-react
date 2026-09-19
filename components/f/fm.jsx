import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psj3yyb-w.css';
import '../../css/h/hefx5abkq.css';

const viewBox = {"width":301,"height":159};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="psj3yyb-w"/><path class="hefx5abkq"/></g>`,
		"fallback": "cif:fm",
	});
}

export default Component;
