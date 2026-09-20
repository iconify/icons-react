import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/s/stzf_fbre.css';
import '../../css/r/r2u1268te.css';
import '../../css/q/qsa-o9l-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGPxlTnXWu" width="20" height="17" x="1" y="3" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="stzf_fbre"/><path clip-rule="evenodd" class="r2u1268te"/></mask><path clip-rule="evenodd" mask="url(#SVGPxlTnXWu)" class="qsa-o9l-x"/>`,
		"fallback": "lets-icons:done-round-fill",
	});
}

export default Component;
