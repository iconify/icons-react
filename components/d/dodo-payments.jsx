import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2fn2abzx.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3j0k_b4s.css';
import '../../css/i/icmaxyehs.css';
import '../../css/b/b51eov4tp.css';
import '../../css/a/a46liac2f.css';

const viewBox = {"width":121,"height":121};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGGFUgfdJB" width="91" height="76" x="18" y="27" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="o2fn2abzx"/></mask><g class="ft5dv1b6b"><path class="v3j0k_b4s"/><g mask="url(#SVGGFUgfdJB)" class="icmaxyehs"><path class="b51eov4tp"/><path class="a46liac2f"/></g></g>`,
		"fallback": "thesvg-color:dodo-payments",
	});
}

export default Component;
