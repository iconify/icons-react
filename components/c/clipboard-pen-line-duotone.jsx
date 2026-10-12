import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhikcfy3j.css';
import '../../css/e/emoy9fbht.css';
import '../../css/r/r0hzshb9j.css';
import '../../css/i/itu2otb5x.css';
import '../../css/b/bgdjgor0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhikcfy3j"/><path class="emoy9fbht"/><path class="r0hzshb9j"/><path class="itu2otb5x"/><path class="bgdjgor0n"/></g>`,
		"fallback": "lucide-extended:clipboard-pen-line-duotone",
	});
}

export default Component;
