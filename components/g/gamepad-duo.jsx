import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p22yetmsi.css';
import '../../css/o/oe7n0nbcu.css';
import '../../css/d/dbknegbze.css';
import '../../css/x/xv7wunbjl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p22yetmsi"/><path class="oe7n0nbcu"/><path class="dbknegbze"/><path class="xv7wunbjl"/></g>`,
		"fallback": "glyphs:gamepad-duo",
	});
}

export default Component;
