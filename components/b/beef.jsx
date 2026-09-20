import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yc12vib0p.css';
import '../../css/g/g9cw18bkp.css';
import '../../css/d/dlsp10brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yc12vib0p"/><path class="g9cw18bkp"/><circle class="dlsp10brj"/></g>`,
		"fallback": "lucide:beef",
	});
}

export default Component;
