import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unhw0aboo.css';
import '../../css/o/orl944wbu.css';
import '../../css/f/fhikcfy3j.css';
import '../../css/e/emoy9fbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unhw0aboo"/><path class="orl944wbu"/><path class="fhikcfy3j"/><path class="emoy9fbht"/></g>`,
		"fallback": "lucide-extended:clipboard-paste-duotone",
	});
}

export default Component;
