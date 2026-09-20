import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueum36p4v.css';
import '../../css/c/cvp889bmc.css';
import '../../css/x/xaeykmbyl.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/m26u0abhn.css';
import '../../css/a/a4o5ydhls.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueum36p4v"/><path class="cvp889bmc"/><path class="xaeykmbyl"/><g class="jn8qy4bru"><path class="m26u0abhn"/><path class="a4o5ydhls"/></g>`,
		"fallback": "openmoji:fortune-cookie",
	});
}

export default Component;
