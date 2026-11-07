import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yallzciul.css';
import '../../css/m/m-7zrk-pf.css';
import '../../css/p/pnuw8wf1j.css';
import '../../css/f/f93hblbdf.css';
import '../../css/d/d7qschzxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yallzciul"/><path class="m-7zrk-pf"/><path class="pnuw8wf1j"/><path class="f93hblbdf"/><path class="d7qschzxb"/>`,
		"fallback": "solar:car-battery-bold-duotone",
	});
}

export default Component;
