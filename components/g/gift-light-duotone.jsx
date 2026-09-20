import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pzgknsb7r.css';
import '../../css/p/pdwg_6ktt.css';
import '../../css/l/l8rqb7bbj.css';
import '../../css/o/o6c1-kbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pzgknsb7r"/><path class="pdwg_6ktt"/><rect class="l8rqb7bbj"/><path class="o6c1-kbgp"/></g>`,
		"fallback": "lets-icons:gift-light-duotone",
	});
}

export default Component;
