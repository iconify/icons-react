import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg_d14xro.css';
import '../../css/h/hube6c-_l.css';
import '../../css/u/u7vstwb-v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="mg_d14xro"/><path class="hube6c-_l"/><path class="u7vstwb-v"/></g>`,
		"fallback": "iconito:chicken",
	});
}

export default Component;
