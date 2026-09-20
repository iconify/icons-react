import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qlmhlwkct.css';
import '../../css/h/hxrc2qk-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qlmhlwkct"/><path class="hxrc2qk-i"/></g>`,
		"fallback": "lucide:cake",
	});
}

export default Component;
