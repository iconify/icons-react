import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djmojw15j.css';
import '../../css/q/q022pyb6e.css';
import '../../css/s/sl4-tmb2b.css';
import '../../css/s/syb9uebtf.css';
import '../../css/t/t4nlewb-u.css';
import '../../css/n/ngr2y94mp.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="djmojw15j"/><path class="q022pyb6e"/><path class="sl4-tmb2b"/><path class="syb9uebtf"/><path class="t4nlewb-u"/><path class="ngr2y94mp"/><circle class="gp0egaclj"/></g>`,
		"fallback": "lucide:brain-cog",
	});
}

export default Component;
