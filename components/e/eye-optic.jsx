import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmfh-5aqd.css';
import '../../css/s/s1ic-421r.css';
import '../../css/v/vh3on17vk.css';
import '../../css/u/uuk2k-_eh.css';
import '../../css/b/bj8erlb9v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmfh-5aqd"/><path class="s1ic-421r"/><path class="vh3on17vk"/><path class="uuk2k-_eh"/><path class="bj8erlb9v"/></g>`,
		"fallback": "streamline-color:eye-optic",
	});
}

export default Component;
