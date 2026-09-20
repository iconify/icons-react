import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_r_9v7-z.css';
import '../../css/f/ferjt9b2f.css';
import '../../css/g/g37okb3zn.css';

const viewBox = {"width":378,"height":81};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGLnHLMeNR" width="378" height="81" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="a_r_9v7-z"/></mask><g mask="url(#SVGLnHLMeNR)" class="ferjt9b2f"><path class="g37okb3zn"/></g>`,
		"fallback": "thesvg-color:foxconn",
	});
}

export default Component;
