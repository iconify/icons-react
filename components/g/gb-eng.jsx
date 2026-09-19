import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp16bptoo.css';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o43-q11_n.css';
import '../../css/z/z21x_ohdt.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="flagpackGbEng0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="rp16bptoo"/></mask><g clip-rule="evenodd" mask="url(#flagpackGbEng0)" class="bi12bsetm"><path class="o43-q11_n"/><path class="z21x_ohdt"/></g>`,
		"fallback": "flagpack:gb-eng",
	});
}

export default Component;
