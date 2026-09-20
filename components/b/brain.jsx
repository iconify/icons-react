import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_h5_3bll.css';
import '../../css/f/fuiyj542f.css';
import '../../css/q/q022pyb6e.css';
import '../../css/c/csovaybja.css';
import '../../css/s/syb9uebtf.css';
import '../../css/d/de6uevbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e_h5_3bll"/><path class="fuiyj542f"/><path class="q022pyb6e"/><path class="csovaybja"/><path class="syb9uebtf"/><path class="de6uevbjs"/></g>`,
		"fallback": "lucide:brain",
	});
}

export default Component;
