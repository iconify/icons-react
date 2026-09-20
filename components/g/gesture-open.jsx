import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyxsd66nc.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbb0xvb8v.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/j/j8ruo_bjg.css';
import '../../css/g/goykrqcfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGwwyqN1xl" class="cyxsd66nc"/></defs><g class="ft5dv1b6b"><path class="fbb0xvb8v"/><use href="#SVGwwyqN1xl"/><g class="p_3zmsvya"><path class="j8ruo_bjg"/><path class="goykrqcfs"/><use href="#SVGwwyqN1xl"/></g></g>`,
		"fallback": "tdesign:gesture-open",
	});
}

export default Component;
