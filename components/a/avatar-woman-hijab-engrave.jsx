import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/st26ygm8v.css';
import '../../css/c/c_0ciq0lh.css';
import '../../css/g/gu2lc6dik.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/e/e__sjky1u.css';
import '../../css/r/r42p5ngeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="st26ygm8v wm-a"/><path class="c_0ciq0lh wm-shadow"/><path class="gu2lc6dik wm-k"/><path class="d3y9mw6db wm-k"/><path class="e__sjky1u wm-a"/><path class="r42p5ngeg wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-hijab-engrave",
	});
}

export default Component;
