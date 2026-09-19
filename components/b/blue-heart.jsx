import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efmnw6soo.css';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kuim36bpx.css';
import '../../css/j/jt3jpeb6n.css';
import '../../css/h/hdlyltpxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGDGP37bmp" width="28" height="25" x="2" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="efmnw6soo"/></mask><g class="to-5kdesz"><path class="kuim36bpx"/><g mask="url(#SVGDGP37bmp)" class="jt3jpeb6n"><path class="hdlyltpxd"/></g></g>`,
		"fallback": "fluent-emoji-high-contrast:blue-heart",
	});
}

export default Component;
