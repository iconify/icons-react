import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ut9dq2spn.css';
import '../../css/z/zquzsxtwc.css';
import '../../css/g/gb6yjacvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ut9dq2spn"/><path class="zquzsxtwc"/><path class="gb6yjacvb"/></g>`,
		"fallback": "streamline-flex-color:film-slate-flat",
	});
}

export default Component;
