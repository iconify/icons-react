import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bk3g17bxu.css';
import '../../css/f/f6ee_jepv.css';
import '../../css/r/r42p5ngeg.css';
import '../../css/g/gu2lc6dik.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/e/e__sjky1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bk3g17bxu"/><path class="f6ee_jepv"/><path class="r42p5ngeg wm-a"/><path class="gu2lc6dik"/><path class="d3y9mw6db"/><path class="e__sjky1u wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-hijab-duo",
	});
}

export default Component;
