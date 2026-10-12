import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zj1i-8bco.css';
import '../../css/h/hxjy4jbwr.css';
import '../../css/d/d2fkh4b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zj1i-8bco"/><path class="hxjy4jbwr"/><path class="d2fkh4b7a"/></g>`,
		"fallback": "lucide-extended:book-copy-duotone",
	});
}

export default Component;
