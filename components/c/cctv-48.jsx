import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc-samsdi.css';
import '../../css/m/mmi04ob3v.css';
import '../../css/m/mbxjymbwu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc-samsdi"/><path class="mmi04ob3v"/><path class="mbxjymbwu"/>`,
		"fallback": "energy-icons:cctv-48",
	});
}

export default Component;
